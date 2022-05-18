import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

const Explore = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <div className='header'>
                <div className="img">🧒🏻</div>
                <h3>Welcome, {user.name}<br/></h3>
            </div>
            
            <div className='home'>
                <h3> Explore page</h3>
            </div>
        </div>
    )
}

export default Explore;
