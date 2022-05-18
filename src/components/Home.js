import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';

const Home = () => {
    const {user, logout, userList} = useContext(UserContext);
    return (
        <div>
            <div className='header'>
                <div className="img">🧒🏻</div>
                <h3>Welcome, {user.id}<br/></h3>
                <pre>{JSON.stringify(user)}</pre>
            </div>
            
            <div className='home'>
                 <Link to="/explore">
                    <button type="submit">Explore and match</button>
                </Link>
                <Link to="/createList">
                    <button type="submit">Create bucketlist!</button>
                </Link>
                <Link to="/bucketlist">
                    <button type="submit">See your bucketlist</button>
                </Link>
                <Link to="/editprofile">
                    <button className="mb-5" type="submit">Edit profile</button>
                </Link>
                <div />
                <button onClick={logout} type="submit">Logout</button>
            </div>
        </div>
    )
}

export default Home;
