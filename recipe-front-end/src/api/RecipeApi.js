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

    loginAsUser: (userData) => {
        const users = RecipeApi.getAllUsers();
        console.log(users)
        
    },

    saveRecipe: () => {
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