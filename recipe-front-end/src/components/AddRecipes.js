import { useEffect, useState } from 'react';
import './AddRecipes.css'
import RecipeApi from '../api/RecipeApi';
import Card from './Card';

function AddRecipes(props) {
    // const [ingredients, setIngredients] = useState([]);

    const ingredients = []
    const ingredientList = [
        "chicken", "turkey", "fish",
        "ketchup", "mayonnaise", "mustard",
        "apple", "banana", "orange", "cherry",
        "lettuce", "onion", "greens", "tomato",
        "salt", "pepper", "vinegar", "cinnamon"
    ]

    for (let ingredient of ingredientList) {
        ingredients.push({
            name: ingredient
        })
    }

    // useEffect( () => {
    //     RecipeApi.getIngredientsSpoonacular()
    //         .then((ingredients) => {
    //             setIngredients(ingredients);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    const [recipes, setRecipes] = useState([])
    let key = 0;

    const getCheckedIngredients = () => {
        const ingredientList = document.getElementsByClassName("ingredient");
        const selectedIngredients = [];

        for (var ingredientDiv of ingredientList) {
            const isChecked = ingredientDiv.firstChild.checked;
            const ingredientName = ingredientDiv.lastChild.textContent;
            if (isChecked) {
                selectedIngredients.push(ingredientName);
            }
        }
        return selectedIngredients;
    }

    const findRecipes = async() => {
        // This finds a list of recipes from the ingredients selected
        const selectedIngredients = getCheckedIngredients();

        RecipeApi.getRecipesFromIngredients(selectedIngredients)
            .then( (recipes) => {
                setRecipes(recipes)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="recipe-app-body-container">
                <h3>Add Recipe</h3>
                <hr/>
                <h5 style={{textAlign: "left", paddingLeft: "1.25rem"}}>Select Ingredients</h5>
                <div className="ingredient-list">
                    {   ingredients ? 
                        ingredients.map((element) => {
                            return (
                                <div key={key++} className="form-check ingredient">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {element.name}
                                    </label>
                                </div>
                            )
                        }) : null
                    }
                    <button className="btn btn-primary login-form-button" 
                    onClick={ findRecipes }>
                        Find Recipes
                    </button>
                </div>

                {
                    recipes.length !== 0 && <hr/>
                }

                {
                    recipes.length !== 0 && <h5 style={{textAlign: "left", paddingLeft: "1.25rem"}}>Results</h5>
                }

                
                <div className="allCards"> 
                {
                    recipes && recipes.map((recipe) => {
                        return (
                            <Card updateComp={() => null}
                                userdata={props.userdata}
                                recipeuser={null}
                                recipe={recipe.id}
                                userrecipeid={-1}
                                key={key++} 
                                title={recipe.title}
                                subtitle={null}
                                caption={null}
                                image={recipe.image}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default AddRecipes;