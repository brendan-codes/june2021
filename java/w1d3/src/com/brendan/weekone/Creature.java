package com.brendan.weekone;

public class Creature {
	// member variables
	public String name;

	
	// constructor
	public Creature(String name) {
		this.setName(name);
	}
	
	// methods
	public void sayName() {
		System.out.println("My name is " + this.getName());
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
