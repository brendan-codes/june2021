package com.brendan.main.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.Library;

@Repository
public interface LibraryRepo extends CrudRepository<Library, Long>{
    // this method retrieves all the Libraries from the database
    List<Library> findAll();
}