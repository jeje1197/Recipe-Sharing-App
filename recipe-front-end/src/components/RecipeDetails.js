import { useEffect, useState } from 'react';
import RecipeApi from '../api/RecipeApi';

export async function loader({params}) {
    const recipeDetails = await RecipeApi.getAnalyzedRecipe(params.recipeId);
    return { recipeDetails };
}

const RecipeDetails = (props) => {
    
}


export default RecipeDetails;