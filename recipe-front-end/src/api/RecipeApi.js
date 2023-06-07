const RecipeApi = {
    baseURI: "http://localhost:8080",
    // baseURI: "http://35.175.214.61:8080",

    // Login Validation
    authenticate: async (username, password) => {
        const loginCredentials = {
            username: username,
            password: password
        }
    
        const authObject = await fetch(RecipeApi.baseURI + "/authenticate", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(loginCredentials) 
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

        const jwt = authObject.jwt
        if (!jwt) {
            return null
        }

        const userInfo = await RecipeApi.getUserInfo(username, jwt)
        
        const userData = {
            id: userInfo.id,
            username: userInfo.username,
            jwt: jwt
        }

        return userData
    },

    addUser: async(userdata) => {
        const user = await fetch(RecipeApi.baseURI + "/api/user", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(userdata)
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

    getAllUsers: async (jwt) => {
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

    getUserInfo: async (username, jwt) => {
        // Credential validation should occur in the backend
        const users = await RecipeApi.getAllUsers(jwt)
        if (!users) {
            return false;
        }

        for(let i = 0; i < users.length; i++) {
            const user = users[i]
            if (username === user.username) {
                return user
            }
        }
        return null
    },

    // --
    loadAllUserRecipes: async (userData) => {
        const recipes = await fetch(RecipeApi.baseURI + "/api/userrecipe", {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + userData.jwt
            }
        })
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            return data
        })
        .catch( (error) => { 
            console.log(error)
        })
        // console.log("Recipes:", recipes)
        return recipes;
    },

    loadRecipesByUser: async (userData) => {
        const recipes = await fetch(RecipeApi.baseURI + "/api/userRecipeByUserId/" + userData.id, {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + userData.jwt
            }
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
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userData.jwt
            },
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
    
    deleteRecipe: async (userData, userRecipeId, updateComponent) => {
        // console.log(userData, userRecipeId)
        const recipes = await fetch(RecipeApi.baseURI + "/api/userrecipe/" + userRecipeId, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userData.jwt
            },
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
    }
}

export default RecipeApi;