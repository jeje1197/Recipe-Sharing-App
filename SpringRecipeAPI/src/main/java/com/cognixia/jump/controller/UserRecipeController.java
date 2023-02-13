package com.cognixia.jump.controller;

import com.cognixia.jump.exception.ResourceNotFoundException;
import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.model.User;
import com.cognixia.jump.model.UserRecipe;
import com.cognixia.jump.repository.RecipeRepository;
import com.cognixia.jump.repository.UserRecipeRepository;
import com.cognixia.jump.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserRecipeController {
	
	@Autowired
    UserRecipeRepository repo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    RecipeRepository recipeRepo;
	
    @GetMapping("/userrecipe")
    public List<UserRecipe> getUserRecipes(){
        return repo.findAll();
    }
    
    @PostMapping("/userrecipe")
    public ResponseEntity<UserRecipe> assignUserToRecipe(@RequestBody UserRecipe ur) {

    	ur.setId(-1);
    	
    	UserRecipe created = repo.save(ur);
    	
    	return ResponseEntity.status(201).body(created);
    }

    /*public ResponseEntity<?> saveRecipeToUser(@PathParam(value="userId") int userId, @PathParam(value="recipeId") int recipeId){

    }*/
    
    @GetMapping("/userrecipe/{userId}")
    public List<Recipe> getAllRecipes(@PathVariable int userId) {
    	return repo.getRecipesFromUserId(userId + "");
    }

    @GetMapping("/userrecipe/{recipeId}")
    public List<User> getAllUsers(@PathVariable int recipeId) {
        return repo.getUsersFromRecipeId(recipeId + "");
    }
    
    @DeleteMapping("/userrecipe/{id}")
	public ResponseEntity<?> deleteUserRecipe(@PathVariable int id) throws ResourceNotFoundException {
		
		Optional<UserRecipe> found = repo.findById(id);
		
		if( found.isEmpty() ) {
			
			throw new ResourceNotFoundException("UserRecipe with id = " + id + " was not found");
		}
		
		repo.deleteById(id);
		
		return ResponseEntity.status(200).body(found.get());
	}
}
