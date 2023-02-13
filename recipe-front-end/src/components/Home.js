import '../components/Home.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import RecipeApi from '../api/RecipeApi';

function Home() {
    const [userRecipes, setUserRecipes] = useState([]);
    let key = 0;

    useEffect(() => {
        RecipeApi.loadAllUserRecipes()
            .then( (recipes) => {
                setUserRecipes(recipes);
                console.log(recipes)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    
    return (
        <div className="Home">
            <div className="recipe-app-body-container">
                <h3>Community Hub</h3>
                <hr/>
                <div className="allCards"> 
                    {
                        userRecipes && userRecipes.map((userRecipe) => {
                            
                            return (
                                <Card key={key++} 
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

export default Home;