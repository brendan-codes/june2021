package com.brendan.main.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="libraries")
public class Library {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy="library", fetch = FetchType.LAZY)
    private List<Book> books;
    
//    @OneToMany(mappedBy="library", fetch = FetchType.LAZY)
//    private List<Magaszine> magazines;
//    
//    @OneToMany(mappedBy="library", fetch = FetchType.LAZY)
//    private List<Employee> employees;
    
    public Library() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	};
    
    

}
