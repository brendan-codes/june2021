package com.brendan.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brendan.main.models.Thing;
import com.brendan.main.repos.ThingRepo;

@Service
public class ThingService {
    // adding the thing Repo as a dependency
    private final ThingRepo thingRepo;
    public ThingService(ThingRepo thingRepo) {
        this.thingRepo = thingRepo;
    }
    
    // returns all the things
    public List<Thing> allThings() {
        return thingRepo.findAll();
    }
    
    
    // creates a thing
    public Thing createThing(Thing b) {
        return thingRepo.save(b);
    }
    
    // edits a thing
    public Thing editThing(Thing b) {
        return thingRepo.save(b);
    }
    
    // retrieves a thing
    public Thing findThing(Long id) {
        Optional<Thing> optionalThing = thingRepo.findById(id);
        if(optionalThing.isPresent()) {
            return optionalThing.get();
        } else {
            return null;
        }
    }
}
