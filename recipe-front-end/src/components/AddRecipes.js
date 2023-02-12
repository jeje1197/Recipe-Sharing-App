import { useEffect, useState } from 'react';
import './AddRecipes.css'
import RecipeApi from '../api/RecipeApi';

function AddRecipes() {
    const [ingredients, setIngredients] = useState([]);

    useEffect( () => {
        console.log("Hello, this component was mounted!")

        RecipeApi.getIngredientsSpoonacular(setIngredients);
    }, [] )    

    return (
        <div>
            <div className="addrecipes-body">
                <h4>Select Ingredients</h4>
                {
                    ingredients.map((element) => {
                        return (
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {element.name}
                                </label>
                            </div>
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default AddRecipes;