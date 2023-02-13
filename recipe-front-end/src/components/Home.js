import eggs from '../images/eggs.jpg';
import pbj from '../images/pbj.jpeg';
import '../components/Home.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import RecipeApi from '../api/RecipeApi';

function Home() {
    const [userRecipes, setUserRecipes] = useState([{}, {}]);
    let key = 0;

    // useEffect(() => {
    //     RecipeApi.loadAllUserRecipes()
    //         .then( (recipes) => setUserRecipes(recipes))
    // }, [])
    
    return (
        <div className="Home">
            <div className="recipe-app-body-container">
                <h3>Community Hub</h3>
                <hr/>
                <div className="allCards"> 
                    {
                        userRecipes && userRecipes.map((recipe) => {
                            
                            return (
                                <Card key={key++} 
                                    mealName={"Meal"}
                                    author={"Author"} 
                                    caption={"Optional Caption"} 
                                    image={eggs} 
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