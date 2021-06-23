package com.brendan.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
    public String newBook() {
        return "/things/new.jsp";
    }
    

    // create
    @RequestMapping(value="/things", method=RequestMethod.POST)
    public String create(@RequestParam("name") String name, 
    					 @RequestParam("description") String description,
    					 @RequestParam("colors") String colors) {
    	
    	
    	 thingService.createThingWithColors(name, description, colors);
    	 return "redirect:/things";
//        if (result.hasErrors()) {
//            return "/things/new.jsp";
//        } else {
//            thingService.createThing(thing);
//            return "redirect:/things";
//        }
    }

}
