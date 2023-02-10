package com.cognixia.jump.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.model.User;
import com.cognixia.jump.model.UserRecipe;
import com.cognixia.jump.repository.UserRecipeRepository;

@RestController
@RequestMapping("/api")
public class UserRecipeController {
	@Autowired
    UserRecipeRepository repo;
	
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
    
    @GetMapping("/userrecipe/{userId}")
    public List<Recipe> getAllRecipes(@PathVariable int userId) {
    	return repo.getRecipesFromUserId(userId + "");
    }
    
    @GetMapping("/userrecipe/{recipeId}")
    public List<User> getAllUsers(@PathVariable int recipeId) {
    	return repo.getUsersFromRecipeId(recipeId + "");
    }
}
