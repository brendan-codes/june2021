package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	// http get
	@GetMapping("/")
	public String hello() {
		return "index.jsp";
	}
	
	
	@GetMapping("/user/{id}")
	public String grabId(@PathVariable("id") String x) {
		System.out.println(x);
		return "redirect:/";
	}
	
	@RequestMapping(path="/submit", method=RequestMethod.POST)
	public String submit(@RequestParam String title, HttpSession session) {
		System.out.println(title);
		
		session.setAttribute("title", title);
		
		return "redirect:/results";
	}
	
	@RequestMapping("/results")
	public String results(HttpSession session, Model model) {
		
		String title = (String) session.getAttribute("title");
		model.addAttribute("title", title);
		
		return "results.jsp";
	}

}
