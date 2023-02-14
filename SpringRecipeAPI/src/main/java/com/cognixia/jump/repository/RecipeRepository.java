package com.cognixia.jump.repository;

import com.cognixia.jump.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Integer> {
    @Query(value="select * from recipe where name=?1",nativeQuery = true)
    public Optional<Recipe> getRecipeByName(String name);
}
