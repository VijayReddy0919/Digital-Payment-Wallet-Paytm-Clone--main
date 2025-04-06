import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className="container">
            <h1>Welcome to My App</h1>
            <p>This is the home page. Here you can find various features and information about our application. Feel free to explore and enjoy your stay!</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
    );
};

export default Home;