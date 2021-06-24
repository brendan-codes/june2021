package com.brendan.main.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brendan.main.models.Color;
import com.brendan.main.models.Thing;
import com.brendan.main.repos.ColorRepo;
import com.brendan.main.repos.ThingRepo;

@Service
public class ThingService {
    // adding the thing Repo as a dependency
    private final ThingRepo thingRepo;
    private final ColorRepo colorRepo;
    
    public ThingService(ThingRepo thingRepo, ColorRepo colorRepo) {
        this.thingRepo = thingRepo;
        this.colorRepo = colorRepo;
    }
    
    // returns all the things
    public List<Thing> allThings() {
        return thingRepo.findAll();
    }
    
    public Thing createThingWithColors(String thingName, 
    								   String thingDesc, 
    								   String colors) {
    	
    	List<Color> thingColors = new ArrayList<Color>();
    	for(String oneColor : colors.split("\\s*,\\s*")) {
    		Color color = this.colorRepo.findByName(oneColor).orElse(null);
    		
    		if(color == null) {
    			Color newColor = new Color();
    			newColor.setName(oneColor);
    			newColor.setHex("#000000");
    			this.colorRepo.save(newColor);
    		}
    		
    		if(!thingColors.contains(color)) {
    			thingColors.add(color);
    		}
    	}
    	Thing newThing = new Thing();
    	newThing.setColors(thingColors);
    	newThing.setName(thingName);
    	newThing.setDescription(thingDesc);
    	return this.thingRepo.save(newThing);
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
