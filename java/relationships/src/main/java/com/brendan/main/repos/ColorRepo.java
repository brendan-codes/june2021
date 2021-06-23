package com.brendan.main.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.Color;

@Repository
public interface ColorRepo extends CrudRepository<Color, Long>{
    // this method retrieves all the books from the database
    List<Color> findAll();
    Optional<Color> findByName(String name);
}
