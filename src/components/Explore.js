import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bucket from "../images/bucket.png";

const Explore = () => {
    const {userAllList} = useContext(UserContext);

    return (
        <div>
        <div className='header'>
            <img className="mb-2" alt="bucket" src={Bucket} />
            <h3>Explore everyones bucketlist!</h3>
            <div className='bucketlist'>
                <Link to="/">
                    <button type="submit">Go back</button>
                </Link>  
            </div>
        </div>

        {userAllList ? (
            userAllList.map((userAllList) => (
                <Container className="card text-center mb-3" fluid>
                    <Row>
                        <Col><b className='cardtext'>To-do</b></Col>
                        <Col><b className='cardtext'>Destination</b></Col>
                    </Row>
                    <Row>
                        <Col><span>{userAllList.itemList}</span></Col>
                        <Col><span>{userAllList.itemCountry}</span> </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><b className='cardtext'>Name</b></Col>
                        <Col><b className='cardtext'>Age</b></Col>
                    </Row>
                    <Row>
                        <Col><span>{userAllList.name}</span></Col>
                        <Col><span>{userAllList.age}</span> </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/seeProfile">
                                <button className="seeProfileB" type="submit">See profile</button>
                            </Link>  
                        </Col>
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

export default Explore;
