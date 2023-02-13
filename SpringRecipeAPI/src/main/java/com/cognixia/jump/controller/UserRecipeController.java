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

import javax.websocket.server.PathParam;
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
    
    /*@PostMapping("/userrecipe")
    public ResponseEntity<UserRecipe> assignUserToRecipe(@RequestBody UserRecipe ur) {

    	ur.setId(-1);
    	
    	UserRecipe created = repo.save(ur);
    	
    	return ResponseEntity.status(201).body(created);
    }*/

    /*Get user recipe by Pathparams: UserId and recipeId*/
    @PostMapping("/userrecipe")
    public ResponseEntity<?> saveRecipeToUser(@PathParam(value="userId") int userId, @PathParam(value="recipeId") int recipeId) throws ResourceNotFoundException{
        Optional <Recipe> recipeFound= recipeRepo.findById(recipeId);
        Optional <User> userFound=userRepo.findById(userId);

        if(userFound.isEmpty()) {
            throw new ResourceNotFoundException("User", userId);
        }
        else if (recipeFound.isEmpty()) {
            throw new ResourceNotFoundException("Recipe", recipeId);
            /*recipeRepo.save()*/
        }

        Optional<UserRecipe> userRecipe = repo.userRecipeExists(userId, recipeId);

        if(userRecipe.isPresent()) {
            return ResponseEntity.status(400).body("This recipe is already saved by this user.");
        }
        UserRecipe newUserRecipe=new UserRecipe(0,userFound.get(),recipeFound.get()," "," ");

        UserRecipe createdUserRecipe= repo.save(newUserRecipe);

        return ResponseEntity.status(201).body(createdUserRecipe);
    }
    /*Add new recipe to recipe table and create the userRecipe relationship*/
    @PostMapping("/userrecipe/newrecipe")
    public ResponseEntity<?> saveRecipeToUser(@RequestBody Recipe recipe, @PathParam(value="userId") int userId) throws ResourceNotFoundException{
        Optional <Recipe> recipeFound= recipeRepo.getRecipeByName(recipe.getName());
        Recipe newRecipe;
        newRecipe = recipeFound.orElseGet(() -> recipeRepo.save(recipe));
        Optional <User> userFound=userRepo.findById(userId);
        if(userFound.isEmpty()) {
            throw new ResourceNotFoundException("User", userId);
        }
        UserRecipe newUserRecipe=new UserRecipe(0,userFound.get(),newRecipe," "," ");
        UserRecipe createdUserRecipe= repo.save(newUserRecipe);
        return ResponseEntity.status(201).body(createdUserRecipe);
    }


        @GetMapping("/userRecipeByUserId/{userId}")
    public List<UserRecipe> getAllRecipes(@PathVariable int userId) {
    	return repo.findByUserId(userId+"");
    }

    @GetMapping("/userRecipeByRecipeId/{recipeId}")
    public List<UserRecipe> getAllUsers(@PathVariable int recipeId) {
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
