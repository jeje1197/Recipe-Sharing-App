
function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} alt="Recipe Visual"/>
            <div className="card-body">
                <h5 className="card-title">Meal goes here...</h5>
                <h6 className="card-subtitle mb-2 text-muted">Author goes here...</h6>
                <p className="card-text">optional caption goes here...</p>
                <a href="#" className="btn btn-primary">Save</a>
                <a href="#" className="btn btn-primary">Make</a>
            </div>
        </div>
    )
}
export default Card;