package com.cognixia.jump.controller;

import com.cognixia.jump.exception.ResourceNotFoundException;
import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class RecipeController {
    @Autowired
    RecipeRepository repo;

    @GetMapping("/recipe")
    public List<Recipe> getRecipes(){
        return repo.findAll();
    }

    @GetMapping("/recipe/{id}")
    public ResponseEntity<?> getRecipe(@PathVariable int id )throws ResourceNotFoundException{
        Optional<Recipe> found= repo.findById(id);

        if(found.isEmpty()) {
            throw new ResourceNotFoundException("User with id = " + id + " was not found");
        }

        return ResponseEntity.status(200).body(found.get());
    }

<<<<<<< HEAD
    @GetMapping("/recipe/")
    public ResponseEntity<?> getRecipeByName(@PathParam(value="Name") String name) throws ResourceNotFoundException{
        Optional<Recipe> found=repo.getRecipeByName(name);
        if(found.isEmpty()) {
            throw new ResourceNotFoundException("Recipe with name = " + name + " was not found.");
        }
        return ResponseEntity.status(200).body(found.get());

    }

=======
>>>>>>> 4ae68f12ddab4a71678a86bcc51043cc7bb20cd0
    @PostMapping("/recipe")
    public ResponseEntity<Recipe> saveRecipe(@RequestBody Recipe recipe){
        recipe.setId(-1);

        Recipe created= repo.save(recipe);

        return ResponseEntity.status(201).body(created);
    }
}
