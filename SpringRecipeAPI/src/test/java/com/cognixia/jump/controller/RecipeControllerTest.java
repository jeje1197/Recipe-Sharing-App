package com.cognixia.jump.controller;

import com.cognixia.jump.model.Recipe;
import com.cognixia.jump.repository.RecipeRepository;
import com.cognixia.jump.service.MyUserDetailsService;
import com.cognixia.jump.util.JwtUtil;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RecipeController.class)
public class RecipeControllerTest {
    private static final String STARTING_URI="http://localhost:8080/api";
    @Autowired
    private MockMvc mvc;
    @MockBean
    private RecipeRepository repo;
    @InjectMocks
    private RecipeController controller;

    @MockBean
    private JwtUtil jwtUtil;
    @MockBean
    private MyUserDetailsService userDetailsService;
    @MockBean
    private PasswordEncoder encoder;
    @Test
    @WithMockUser(username = "testUser",roles = {"USER_ADMIN"})
    @AutoConfigureMockMvc(addFilters = false)
    void testGetRecipes() throws Exception {
        String uri= STARTING_URI+"/recipe";

        List<Recipe> allRecipes = new ArrayList<Recipe>();
        allRecipes.add(new Recipe(1,"Omlette","omlette.com","2839"));
        allRecipes.add(new Recipe(2,"Burger","burger.com","2001"));

        when(repo.findAll()).thenReturn(allRecipes);

        mvc.perform(get(uri))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(jsonPath("$.length()").value(allRecipes.size()))
                .andExpect(jsonPath("$[0].id").value(allRecipes.get(0).getId()))
                .andExpect(jsonPath("$[0].name").value(allRecipes.get(0).getName()))
                .andExpect(jsonPath("$[0].imageLink").value(allRecipes.get(0).getImageLink()))
                .andExpect(jsonPath("$[0].apiid").value(allRecipes.get(0).getAPIId()))
                .andExpect(jsonPath("$[1].id").value(allRecipes.get(1).getId()))
                .andExpect(jsonPath("$[1].name").value(allRecipes.get(1).getName()))
                .andExpect(jsonPath("$[1].imageLink").value(allRecipes.get(1).getImageLink()))
                .andExpect(jsonPath("$[1].apiid").value(allRecipes.get(1).getAPIId()));

        verify(repo,times(1)).findAll();
        verifyNoInteractions(repo);
    }
    @Test
    void testGetRecipe()throws Exception{}
    @Test
    void testGetRecipeByName(){}
    @Test
    void testSaveRecipe(){}
}
