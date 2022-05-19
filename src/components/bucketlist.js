import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import deleteBucket from "../images/delete.png";
import Bucket from "../images/bucket.png";

const BucketList = () => {
    const {userList} = useContext(UserContext);

    return (
    <div>
        <div className='header'>
            <img className="mb-2"alt="bucket" src={Bucket} />
            <h3>See your bucketlist!</h3>
            <div className='bucketlist'>
                <Link to="/createList">
                    <button type="submit">Add items to your list!</button>
                </Link>  
            </div>
        </div>

        {userList ? (
            userList.map((userList) => (
                <Container className="card text-center mb-3" fluid>
                    <Row>
                        <Col><b className='cardtext'>To-do</b></Col>
                        <Col><b className='cardtext'>Destination</b></Col>
                    </Row>
                    <Row>
                        <Col><span>{userList.itemList}</span></Col>
                        <Col><span>{userList.itemCountry}</span> </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col><img className="" src={deleteBucket} alt="remove button"></img></Col>
                    </Row>
                </Container>
            ))               
                ) : (
                    <div className='text-center'>
                        <h4>There are no bucketlists to be shown!</h4>
                    </div>
        )} 
            <div className="bottom-link"><Link to="/">↩️</Link></div>  
    </div>
    )
}

export default BucketList;
