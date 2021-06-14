package com.brendan.main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnicornController {
	
	@RequestMapping("/")
	public String main() {
		return "Hello world!";
	}
	
	
	@RequestMapping("/main")
	public String otherMethod() {
		return "<h1>This is a test!!</h1>";
	}

}
