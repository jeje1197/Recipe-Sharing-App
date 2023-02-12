import Card from './Card'

function MyRecipes() {
    return (
        <div className="recipe-app-body-container">
            <h3>My Recipes</h3>
            <hr/>
            <div className="allCards">
                <Card image={""} />
                <Card image={""} />
            </div>
        </div>
    );
}

export default MyRecipes;