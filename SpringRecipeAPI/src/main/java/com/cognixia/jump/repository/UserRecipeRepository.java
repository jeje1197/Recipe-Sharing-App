package com.cognixia.jump.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.model.User;
import com.cognixia.jump.model.UserRecipe;

@Repository
public interface UserRecipeRepository extends JpaRepository<UserRecipe,Integer> {
	@Query("select u.recipe_id from UserRecipe u where u.user_id=?1")
    public List<Recipe> getRecipesFromUserId(String userId);
	
	@Query("select u.user_id from UserRecipe u where u.recipe_id=?1")
    public List<User> getUsersFromRecipeId(String recipeId);
}
