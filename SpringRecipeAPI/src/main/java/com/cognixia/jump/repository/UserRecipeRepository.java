package com.cognixia.jump.repository;

import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.model.User;
import com.cognixia.jump.model.UserRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRecipeRepository extends JpaRepository<UserRecipe,Integer> {
	@Query(value="select recipe_Id from user_recipe u where u.user_Id=?1",nativeQuery = true)
    public List<Recipe> getRecipesFromUserId(String userId);
	
	@Query(value="select user_Id from user_recipe u where u.recipe_Id=?1",nativeQuery = true)
    public List<User> getUsersFromRecipeId(String recipeId);

    @Query(value="select id from user_recipe as ur where ur.user_id=?1 and ur.recipe_id=?2",nativeQuery = true)
    public Optional<UserRecipe> userRecipeExists(int userId, int recipeId);

}
