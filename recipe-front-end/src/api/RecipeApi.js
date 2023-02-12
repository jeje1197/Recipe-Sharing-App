const RecipeApi = {
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