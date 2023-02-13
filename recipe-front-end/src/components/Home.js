import eggs from '../images/eggs.jpg';
import pbj from '../images/pbj.jpeg';
import '../components/Home.css';
import Card from './Card';

function Home() {
    
    return (
        <div className="Home">
            <div className="recipe-app-body-container">
                <h3>Community Hub</h3>
                <hr/>
                <div className="allCards">
                    <Card image={eggs} />
                    <Card image={pbj} />
                    <Card image={eggs} />
                    <Card image={pbj} />
                    <Card image={eggs} />
                    <Card image={pbj} />
                    <Card image={eggs} />
                    <Card image={pbj} />
                </div>
            </div>
            
        </div>
    )
}

export default Home;