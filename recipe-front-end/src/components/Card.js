import RecipeApi from '../api/RecipeApi';
import RecipeModal from './RecipeModal';
import React, { useState } from 'react';

function Card(props) {
    const [displayModal, setDisplayModal] = useState(false);
    
    const isCreator = () => {
        if (!props.userdata || !props.recipeuser) {
            return false
        }
        return props.userdata.username === props.recipeuser
    } 

    return (
        <div className="card" style={{width: "18rem"}}>

            <div className="cardImgDiv rounded">
                <img className="cardImg rounded mx-auto d-block" src={props.image} alt="Recipe Visual"/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.subtitle}
                </h6>
                <p className="card-text">{props.caption}</p>
                { isCreator() ? (
                        <button className="btn btn-primary" onClick={() => { RecipeApi.deleteRecipe(props.userdata, props.userrecipeid, props.updateComp) }}>Delete</button>
                    ) : (
                        <button className="btn btn-primary" onClick={() => {
                            RecipeApi.saveRecipe(props.userdata, props.title, props.recipe, props.image) 
                        }}>Save</button>
                    )
                }
                
                <button className="btn btn-primary" onClick={() => { setDisplayModal(true)}}>Make</button>
            </div>
            
            <RecipeModal userdata={props.userdata} recipeName={props.title} recipeId={props.recipe} image={props.image} recipeSteps={props.recipeSteps} displayModal = {displayModal} setDisplayModal = {setDisplayModal} />
        </div>
    )
}
export default Card;