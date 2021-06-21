package com.brendan.main.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.brendan.main.models.Color;
import com.brendan.main.models.Thing;
import com.brendan.main.services.ColorService;
import com.brendan.main.services.ThingService;

@Controller
public class ColorController {
	
	@Autowired
	private ColorService colorService;
	
	@Autowired
	private ThingService thingService;
    
    // redirect from root
    @RequestMapping("/")
    public String redirect() {
    	return "redirect:/colors";
    }
    
    //show all
    @RequestMapping("/colors")
    public String index(Model model) {
        List<Color> colors = colorService.allColors();
        model.addAttribute("colors", colors);
        return "/colors/showAll.jsp";
    }
    
    //show new
    @RequestMapping("/colors/new")
    public String newBook(@ModelAttribute("color") Color color) {
        return "/colors/new.jsp";
    }
    
    // show 
    @RequestMapping("/colors/{color_id}/edit")
    public String showColor(@PathVariable("color_id") Long color_id, Model model) {
    	model.addAttribute("color", colorService.findColor(color_id));
    	model.addAttribute("things", thingService.allThings());
    	
    	return "/colors/showOne.jsp";
    }
    
    @RequestMapping(value="/colors/{color_id}/edit", method=RequestMethod.POST)
    public String addThingToColor(@PathVariable("color_id") Long color_id, @RequestParam("thing_id") Long thing_id) {
    	
    	Color myColor = colorService.findColor(color_id);
    	Thing myThing = thingService.findThing(thing_id);
    	
    	myColor.getThings().add(myThing);
    	colorService.editColor(myColor);
    	
    	return "redirect:/colors/" + color_id + "/edit";
    }
    
    //show edit
//    @RequestMapping("/colors/{id}/edit")
//    public String showEditBook(@PathVariable("id") Long id, Model model) {
//    	Book myBook = colorService.findBook(id);
//    	model.addAttribute("editBook", myBook);
//    	return "/colors/edit.jsp";
//    }
//    
    // create
    @RequestMapping(value="/colors", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("color") Color color, 
    					 BindingResult result) {
        if (result.hasErrors()) {
            return "/colors/new.jsp";
        } else {
            colorService.createColor(color);
            return "redirect:/colors";
        }
    }
    
    
    //edit
//    @RequestMapping(value="/colors/{id}", method=RequestMethod.PUT)
//    public String update(
//    		@Valid @ModelAttribute("editBook") Book color, 
//    					            BindingResult result,
//    					                     Model model,
//    					     @PathVariable("id") Long id
//    					) {
//        if (result.hasErrors()) {
//            return "/colors/edit.jsp";
//        } else {
//            colorService.editBook(color);
//            return "redirect:/colors";
//        }
//    }

}
