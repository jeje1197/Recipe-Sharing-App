import { useEffect, useState } from 'react';
import RecipeApi from '../api/RecipeApi';
import { useParams} from 'react-router-dom';

const RecipeDetails = (props) => {
    const [recipeDetails, setRecipeDetails] = useState({
        name: "",
        steps: [{}]
    });
    const { apiId } = useParams();

    useEffect(() => {
        // console.log(apiId);
        RecipeApi.getAnalyzedRecipe(apiId)
            .then( (details) => {
                setRecipeDetails(details[0]);
            })
            .catch((error) => {
                console.log(error);
            })
        console.log(recipeDetails);
    }, [apiId])

    const steps = recipeDetails.steps;
    // console.log(steps);
    return (
        <div className="recipe-app-body-container">
            <h3>Recipe Steps</h3>
            <ol>
            {
                steps.map(s =>
                    <li key={s.number}>{s.step}</li>)
            }
            </ol>
            

        </div>
    )
}


export default RecipeDetails;