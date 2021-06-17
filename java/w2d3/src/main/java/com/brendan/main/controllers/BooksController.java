package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
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
    public String newBook(@ModelAttribute("newBook") Book book, Model model) {
    	model.addAttribute("book", "string!!");
        return "/books/new.jsp";
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
}
