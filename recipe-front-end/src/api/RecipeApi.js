const RecipeApi = {
    baseURI: "http://localhost:8080",

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
        for(let i = 0; i < users.length; i++) {
            const user = users[i]
            if (userData.username === user.username && 
                userData.password === user.password) {
                console.log("Logged in")
                return true
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
            console.log(recipes)
        return recipes;
    },

    loadRecipes: async () => {
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
            console.log(recipes)
        return recipes;
    },

    saveRecipe: async (userData, recipeId) => {
        console.log("Saving Recipe");
    },
    
    makeRecipe: () => {
        console.log("Making Recipe");
    },
    
    deleteRecipe: () => {
        console.log("Deleting Recipe");
    },
    
    getIngredientsSpoonacular: (setIngredients) => {
        const URL = "https://api.spoonacular.com/food/ingredients/search?query=banana&apiKey=30eaf136e2f244cc93220c1b6bc3c45a";
    
        fetch(URL)
            .then( (result) => {
                return result.json() // data in next section
            } )
            .then( (data) => {
                setIngredients(data.results)
            } )
            .catch( (error) => { 
                console.log(error) 
            } );
    },

    getRecipesFromIngredients: (ingredients) => {
        console.log("Getting Recipes")
    },

    getRecipesByUser: (user) => {
        
    }
}

export default RecipeApi;