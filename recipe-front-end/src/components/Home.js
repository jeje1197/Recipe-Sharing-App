import eggs from '../images/eggs.jpg';
import pbj from '../images/pbj.jpeg';
import '../components/Home.css';
import Card from './Card';

function Home() {
    
    return (
        <div className="Home">
            <div className="allCards">
                <Card image={eggs} />
                <Card image={pbj} />
            </div>
        </div>
    )
}

export default Home;