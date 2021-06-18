package com.brendan.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brendan.main.models.Library;
import com.brendan.main.repositories.LibraryRepo;

@Service
public class LibraryService {
    // adding the Library Repo as a dependency
    private final LibraryRepo libraryRepo;
    public LibraryService(LibraryRepo libraryRepo) {
        this.libraryRepo = libraryRepo;
    }
    
    // returns all the Libraries
    public List<Library> allLibraries() {
        return libraryRepo.findAll();
    }
    
    // creates a Library
    public Library createLibrary(Library b) {
        return libraryRepo.save(b);
    }
    
    // edits a Library
    public Library editLibrary(Library b) {
    	// logic?
        return libraryRepo.save(b);
    }
    
    // retrieves a Library
    public Library findLibrary(Long id) {
        Optional<Library> optionalLibrary = libraryRepo.findById(id);
        if(optionalLibrary.isPresent()) {
            return optionalLibrary.get();
        } else {
            return null;
        }
    }
}