import '../components/Home.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import RecipeApi from '../api/RecipeApi';

function MyRecipes(props) {
    const [userRecipes, setUserRecipes] = useState([]);
    const [updateComponent, setUpdateComponent] = useState(false);
    let key = 0;

    useEffect(() => {
        RecipeApi.loadRecipesByUser(props.userdata)
            .then( (recipes) => {
                setUserRecipes(recipes);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [props.userdata, updateComponent])
    
    return (
        <div className="MyRecipes">
            <div className="recipe-app-body-container">
                <h3>My Recipes</h3>
                <hr/>
                <div className="allCards"> 
                {
                    userRecipes && userRecipes.map((userRecipe) => {
                        return (
                            <Card updateComp={setUpdateComponent}
                                userdata={props.userdata}
                                recipeuser={userRecipe.user.username}
                                recipe={userRecipe.recipe.id}
                                recipeApiId={userRecipe.recipe.apiid}
                                userrecipeid={userRecipe.id}
                                key={key++} 
                                title={userRecipe.recipe.name}
                                subtitle={userRecipe.user.username}
                                caption={userRecipe.caption}
                                image={userRecipe.userPhoto.trim() ? userRecipe.userPhoto : userRecipe.recipe.imageLink}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default MyRecipes;