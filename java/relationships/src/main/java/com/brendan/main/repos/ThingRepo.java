package com.brendan.main.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.Thing;

@Repository
public interface ThingRepo extends CrudRepository<Thing, Long>{
    // this method retrieves all the books from the database
    List<Thing> findAll();
}