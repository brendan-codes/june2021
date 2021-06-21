package com.brendan.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brendan.main.models.Color;
import com.brendan.main.repos.ColorRepo;

@Service
public class ColorService {
    // adding the color Repo as a dependency
    private final ColorRepo colorRepo;
    public ColorService(ColorRepo colorRepo) {
        this.colorRepo = colorRepo;
    }
    
    // returns all the colors
    public List<Color> allColors() {
        return colorRepo.findAll();
    }
    
    
    // creates a color
    public Color createColor(Color b) {
        return colorRepo.save(b);
    }
    
    // edits a color
    public Color editColor(Color b) {
        return colorRepo.save(b);
    }
    
    // retrieves a color
    public Color findColor(Long id) {
        Optional<Color> optionalColor = colorRepo.findById(id);
        if(optionalColor.isPresent()) {
            return optionalColor.get();
        } else {
            return null;
        }
    }
}