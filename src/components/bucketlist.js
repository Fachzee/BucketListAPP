import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const EditProfile = () => {
    const {userList} = useContext(UserContext);
    return (
    <div>
        <div className='header'>
            <div className="img">🧒🏻</div>
            <h3>See your bucketlist!</h3>
            <div className='bucketlist'>
                <Link to="/createList">
                    <button type="submit">Add items to your list!</button>
                </Link>  
            </div>
        </div>

        {userList ? (
            userList.map((userList, index) => ( 
                 <tr className='card mb-3' data-index={index}>
                    <td className='cardtext'>To-do</td>
                    <td className='mb-3'>{userList.itemList}</td>  
                    <td className='cardtext'>Country</td>
                    <td>{userList.itemCountry}</td>   
                </tr>
            ))               
                ) : (
                    <div className='text-center'>
                        <h4>Your bucketlist is empty!</h4>
                    </div>
        )}   
  
    </div>
    )
}

export default EditProfile;
