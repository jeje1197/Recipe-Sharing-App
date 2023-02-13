import RecipeApi from '../api/RecipeApi';
import RecipeModal from './RecipeModal';
import React, { useState } from 'react';

function Card(props) {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <div className="card" style={{width: "18rem"}}>

            <div className="cardImgDiv rounded">
                <img className="cardImg rounded mx-auto d-block" src={props.image} alt="Recipe Visual"/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{props.mealName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.author}
                </h6>
                <p className="card-text">{props.caption}</p>
                <button className="btn btn-primary" onClick={() => { RecipeApi.saveRecipe() }}>Save</button>
                <button className="btn btn-primary" onClick={() => { RecipeApi.makeRecipe(); setDisplayModal(true)}}>Make</button>
            </div>
            
            <RecipeModal image={props.image} displayModal = {displayModal} setDisplayModal = {setDisplayModal} />
        </div>
    )
}
export default Card;