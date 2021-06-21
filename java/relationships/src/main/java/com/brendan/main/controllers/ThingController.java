package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.brendan.main.models.Thing;
import com.brendan.main.services.ThingService;

@Controller
public class ThingController {

	@Autowired
	private ThingService thingService;
    
    //show all
    @RequestMapping("/things")
    public String index(Model model) {
        List<Thing> things = thingService.allThings();
        model.addAttribute("things", things);
        return "/things/showAll.jsp";
    }
    
    //show new
    @RequestMapping("/things/new")
    public String newBook(@ModelAttribute("thing") Thing thing) {
        return "/things/new.jsp";
    }
    
    //show edit
//    @RequestMapping("/things/{id}/edit")
//    public String showEditBook(@PathVariable("id") Long id, Model model) {
//    	Book myBook = thingService.findBook(id);
//    	model.addAttribute("editBook", myBook);
//    	return "/things/edit.jsp";
//    }
//    
    // create
    @RequestMapping(value="/things", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("thing") Thing thing, 
    					 BindingResult result) {
        if (result.hasErrors()) {
            return "/things/new.jsp";
        } else {
            thingService.createThing(thing);
            return "redirect:/things";
        }
    }

}
