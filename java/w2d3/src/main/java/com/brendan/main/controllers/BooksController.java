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

import com.brendan.main.models.Book;
import com.brendan.main.services.BookService;

@Controller
public class BooksController {
    private final BookService bookService;
    public BooksController(BookService bookService) {
        this.bookService = bookService;
    }
    
    // get
    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "/books/index.jsp";
    }
    
    @RequestMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book, Model model) {
        return "/books/new.jsp";
    }
    
    @RequestMapping("/books/{id}/edit")
    public String showEditBook(@PathVariable("id") Long id, Model model) {
    	Book myBook = bookService.findBook(id);
 
    	
    	model.addAttribute("editBook", myBook);
    	return "/books/edit.jsp";
    }
    
    // post
    @RequestMapping(value="/books", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, 
    					 BindingResult result) {
        if (result.hasErrors()) {
            return "/books/new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }
    
    
    //put
    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("editBook") Book book, 
    					 BindingResult result,
    					 Model model,
    					 @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "/books/edit.jsp";
        } else {
            bookService.editBook(book);
            return "redirect:/books";
        }
    }
}
