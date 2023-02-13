import { useEffect, useState } from 'react';
import './AddRecipes.css'
import RecipeApi from '../api/RecipeApi';

function AddRecipes() {
    const [ingredients, setIngredients] = useState([]);
    // const selectedIngredients = [];
    let key = 0;

    useEffect( () => {
        RecipeApi.getIngredientsSpoonacular()
            .then((ingredients) => {
                setIngredients(ingredients);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

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

    const findRecipes = () => {
        // This finds a list of recipes from the ingredients selected
        const selectedIngredients = getCheckedIngredients();
        console.log(selectedIngredients);
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
            </div>
        </div>
    )
}

export default AddRecipes;