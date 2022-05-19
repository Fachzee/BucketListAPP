import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bucket from "../images/bucket.png";

const Explore = () => {
    const {user} = useContext(UserContext);
    console.log(user);

    return (
        <div>
        <div className='header'>
            <img className="mb-2" alt="bucket" src={Bucket} />
            <h3>See profile!</h3>
            <div className='bucketlist'>
                <Link to="/">
                    <button type="submit">Go back</button>
                </Link>  
            </div>
        </div>
                <Container className="card mb-3 text-center" fluid>
                    <Row>
                        <Col><b className='cardtext'>Name</b></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><b>{user.name}</b></Col>
                    </Row>
                </Container> 

                <Container className="card mb-3 text-center" fluid>
                    <Row>
                        <Col><b className='cardtext'>Email</b></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><b>{user.email}</b></Col>
                    </Row>
                </Container> 

                <Container className="card mb-3 text-center" fluid>
                    <Row>
                        <Col><b className='cardtext'>Nationality</b></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><b>{user.nationality}</b></Col>
                    </Row>
                </Container> 

                <Container className="card mb-3 text-center" fluid>
                    <Row>
                        <Col><b className='cardtext'>Age</b></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><b>{user.age}</b></Col>
                    </Row>
                </Container> 
    </div>

    )
}

export default Explore;
