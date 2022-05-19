import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import Bucket from "../images/bucket.png";

const Home = () => {
    
    const {user, logout} = useContext(UserContext);

    return (
        <div>
            <div className='header'>
                <img className="mb-2" alt="bucket" src={Bucket} />
                <h3>Welcome, {user.name}<br/></h3>
            </div>
            
            <div className='home'>
                 <Link to="/explore">
                    <button type="submit">Explore others bucketlists!</button>
                </Link>
                <Link to="/createList">
                    <button type="submit">Add items to bucketlist</button>
                </Link>
                <Link to="/bucketlist">
                    <button type="submit">See your bucketlist</button>
                </Link>
                <Link to="/editprofile">
                    <button className="mb-5" type="submit">See profile</button>
                </Link>
                <div />
                <button onClick={logout} type="submit">Logout</button>
            </div>
        </div>
    )
}

export default Home;
