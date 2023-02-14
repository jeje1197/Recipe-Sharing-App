import RecipeApi from "../api/RecipeApi";

function RecipeModal (props) {
    const displayModal = props.displayModal;

    return (displayModal ? 
        (
        <div className="modal" tabIndex="-1" role="dialog" style={{display: "block"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.recipe}</h5>
            </div>
            <img className="cardImg"src={props.image} alt="Recipe Visual"/>
            <div className="modal-body">
              <p>Recipe Steps goes here...</p>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => {
                RecipeApi.saveRecipe(props.userdata, props.recipeName, props.recipeId, props.image);
                props.setDisplayModal(false);
              }}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {props.setDisplayModal(false)}}>Close</button>
            </div>
          </div>
        </div>
      </div>
        ) : null
    )
}

export default RecipeModal;