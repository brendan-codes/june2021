package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.brendan.main.models.Book;
import com.brendan.main.models.Library;
import com.brendan.main.services.BookService;
import com.brendan.main.services.LibraryService;

@Controller
public class LibrariesController {
    private final LibraryService libraryService;
    private final BookService bookService;

    public LibrariesController(LibraryService libraryService, BookService bookService) {
        this.libraryService = libraryService;
        this.bookService = bookService;
    }
    
    // get
    @RequestMapping("/libraries")
    public String index(Model model) {
        List<Library> libraries = libraryService.allLibraries();
        model.addAttribute("libraries", libraries);
        return "/libraries/index.jsp";
    }
    
    @RequestMapping("/libraries/new")
    public String newLibrary(@ModelAttribute("library") Library library, Model model) {
        return "/libraries/new.jsp";
    }
    
    @RequestMapping("/libraries/{id}")
    public String editLibrary(@PathVariable("id") Long id, Model model) {
    	model.addAttribute("library", libraryService.findLibrary(id));
    	model.addAttribute("books", bookService.booksNotInLibraries());
    	return "/libraries/edit.jsp";
    }
    
    @RequestMapping(value="/libraries", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("library") Library library, 
    					 BindingResult result) {
        if (result.hasErrors()) {
            return "/libraries/new.jsp";
        } else {
            libraryService.createLibrary(library);
            return "redirect:/libraries";
        }
    }
    
    @RequestMapping(value="/libraries/{id}", method=RequestMethod.POST)
    public String addBookToLibrary(@PathVariable("id") Long library_id, @RequestParam("book_id") Long book_id) {
	
    	// grab the library
    	Library myLib = libraryService.findLibrary(library_id);
    	// grab the book
    	Book myBook = bookService.findBook(book_id);
    	// create the association
    	
    	// add the book to the list of books on a library
    	myLib.getBooks().add(myBook);
    	libraryService.editLibrary(myLib);
    	
    	// attaching the library to the library property of a book
    	myBook.setLibrary(myLib);
    	bookService.editBook(myBook);
    	
    	// redirect
    	return "redirect:/books";
    }
}