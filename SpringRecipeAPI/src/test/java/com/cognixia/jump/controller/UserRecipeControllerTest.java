package com.cognixia.jump.controller;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.cognixia.jump.repository.RecipeRepository;
import com.cognixia.jump.repository.UserRecipeRepository;
import com.cognixia.jump.repository.UserRepository;

@WebMvcTest(UserRecipeController.class)
public class UserRecipeControllerTest {
    private static final String STARTING_URI="http://localhost:8080/api";

    @Autowired
    private MockMvc mvc;
    @MockBean
    private UserRecipeRepository userReciperepo;
    @MockBean
    private UserRepository userRepo;
    @MockBean
    private RecipeRepository recipeRepo;
    @InjectMocks
    private UserRecipeController controller;
    
//    @Test
//    @WithMockUser(username = "testUser", roles = {"USER_ADMIN"})
//    @AutoConfigureMockMvc(addFilters = false)
//    void testGetUserRecipes() throws Exception {
//    	
//    }
}
