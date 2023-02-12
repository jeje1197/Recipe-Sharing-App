import { saveRecipe, makeRecipe, deleteRecipe } from '../api/RecipeApi';
import RecipeModal from './RecipeModal';
import React, { useState } from 'react';

function Card(props) {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <div className="card" style={{width: "18rem"}}>

            <div className="cardImgDiv ">
                <img className="cardImg rounded mx-auto d-block"src={props.image} alt="Recipe Visual"/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">Meal goes here...</h5>
                <h6 className="card-subtitle mb-2 text-muted">Author goes here...</h6>
                <p className="card-text">optional caption goes here...</p>
                <button className="btn btn-primary" onClick={() => { saveRecipe() }}>Save</button>
                <button className="btn btn-primary" onClick={() => { makeRecipe(); setDisplayModal(true)}}>Make</button>
            </div>
            
            <RecipeModal image={props.image} displayModal = {displayModal} setDisplayModal = {setDisplayModal} />
        </div>
    )
}
export default Card;