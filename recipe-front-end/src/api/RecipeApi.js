const RecipeApi = {
    baseURI: "http://localhost:8080",

    // Login Validation
    getAllUsers: async () => {
        const users = await fetch(RecipeApi.baseURI + "/api/user", {
            method: "GET",
            mode: "cors",
        })
            .then( (result) => {
                return result.json()
            })
            .then( (data) => {
                return data
            })
            .catch( (error) => { 
                console.log(error) 
            });
        return users;
    }, 

    loginAsUser: async (userData) => {
        // Credential validation should occur in the backend
        const users = await RecipeApi.getAllUsers()
        if (!users) {
            return false;
        }
        for(let i = 0; i < users.length; i++) {
            const user = users[i]
            if (userData.username === user.username && 
                userData.password === user.password) {
                console.log("Logged in")
                return user
            }
        }
        return false
    },

    loadAllUserRecipes: async () => {
        const recipes = await fetch(RecipeApi.baseURI + "/api/userrecipe", {
            method: "GET",
            mode: "cors",
        })
            .then( (result) => {
                return result.json()
            })
            .then( (data) => {
                return data
            })
            .catch( (error) => { 
                console.log(error) 
            });
            // console.log(recipes)
        return recipes;
    },

    loadRecipesByUser: async (userData) => {
        const recipes = await fetch(RecipeApi.baseURI + "/api/userRecipeByUserId/" + userData.id, {
            method: "GET",
            mode: "cors",
        })
            .then( (result) => {
                return result.json()
            })
            .then( (data) => {
                return data
            })
            .catch( (error) => { 
                console.log(error) 
            });
            // console.log(recipes)
        return recipes;
    },

    saveRecipe: async (userData, recipeName, recipeApiId, recipeImage) => {
        const recipeObject = {
            apiid: String(recipeApiId),
            imageLink: recipeImage,
            name: recipeName
        }

        const recipes = await fetch(RecipeApi.baseURI + "/api/userrecipe/newrecipe?userId=" + userData.id, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeObject) 
        })
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            return data
        })
        .catch( (error) => { 
            console.log(error) 
        });
    },
    
    deleteRecipe: async (userRecipeId, updateComponent) => {
        const recipes = await fetch(RecipeApi.baseURI + "/api/userrecipe/" + userRecipeId, {
            method: "DELETE",
            mode: "cors",
        })
            .then( (result) => {
                return result.json()
            })
            .then( (data) => {
                return data
            })
            .catch( (error) => { 
                console.log(error) 
            });
            console.log(recipes)
        updateComponent(true)
    },

    spoonacularAPIKey: "fa4af7aa89eb442db0aca40ce41cdd1f",
    
    getIngredientsSpoonacular: async (setIngredients) => {
        const URL = "https://api.spoonacular.com/food/ingredients/search?query=banana&" + 
            "apiKey=" + RecipeApi.spoonacularAPIKey;

    
        const ingredients = await fetch(URL)
            .then( (result) => {
                return result.json() // data in next section
            } )
            .then( (data) => {
                return data.results
            } )
            .catch( (error) => { 
                console.log(error) 
            });

        return ingredients
    },

    getRecipesFromIngredients: async (ingredients) => {
        const URL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
        let ingredientQueryString = "";

        for (let i = 0; i < ingredients.length; i++) {
            if (i !== 0) {
                ingredientQueryString += ",+"
            }
            ingredientQueryString += ingredients[i];
        }
        const finalURI = URL + ingredientQueryString + "&apiKey=" + RecipeApi.spoonacularAPIKey;
        const recipes = await fetch(finalURI)
            .then( (result) => {
                return result.json() // data in next section
            } )
            .then( (data) => {
                return data
            } )
            .catch( (error) => { 
                console.log(error) 
            });
        // console.log(recipes)
        return recipes
    },

    getRecipesByUser: (user) => {
        
    }
}

export default RecipeApi;