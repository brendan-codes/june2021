package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.brendan.main.models.User;
import com.brendan.main.services.UserService;
import com.brendan.main.validators.UserValidator;

//imports removed for brevity
@Controller
public class UsersController {
	
	private final UserService userService;
	private final UserValidator userValidator;

	public UsersController(UserService userService, UserValidator userValidator) {
		this.userService = userService;
		this.userValidator = userValidator;
	}
	
	@RequestMapping("/")
	public String root() {
		
		return "redirect:/registration";
	}

	@RequestMapping("/registration")
	public String registerForm(@ModelAttribute("user") User user) {
		return "/users/registration.jsp";
	}

	@RequestMapping("/login")
	public String login() {
		return "/users/login.jsp";
	}

	@RequestMapping(value="/registration", method=RequestMethod.POST)
	public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
		// if result has errors, return the registration page (don't worry about validations just now)
     // else, save the user in the database, save the user id in session, and redirect them to the /home route
        userValidator.validate(user, result);
		
		if(result.hasErrors()) {
            return "/users/registration.jsp";
        }
        User u = userService.registerUser(user);
        session.setAttribute("userId", u.getId());
        return "redirect:/colors";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model,
			HttpSession session, RedirectAttributes flash) {
		// if the user is authenticated, save their user id in session
		// else, add error messages and return the login page
		if(userService.authenticateUser(email, password)) {
			// success
			User u = userService.findByEmail(email);
			session.setAttribute("userId", u.getId());
			return "redirect:/colors";
		}else {
			flash.addFlashAttribute("error", "you done messed up!!");
			return "redirect:/login";
			// failure
		}
	}

	@RequestMapping("/home")
	public String home(HttpSession session, Model model) {
		// get user from session, save them in the model and return the home page
		return "";
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		// invalidate session
		// redirect to login page
		session.invalidate();
		return "redirect:/registration";
	}
}
