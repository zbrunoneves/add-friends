import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkedAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const UserCard = ({picture, name, age, description, phone, email, from, birth, sendRequest}) => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const sendFriendRequest = () => {
        setButtonClicked(true);
        sendRequest(true);
    }



    return (
        <Card style={{ width: '100%' }}>
            <Card.Img className="d-block mx-auto w-50 mt-3" variant="top" src={picture} style={{height: "174px"}}/>
            <Card.Body className="text-center">
            <Card.Title className="font-weight-bold">{name}, {age}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <FontAwesomeIcon icon={faPhone} className="mr-2"/>
                    {phone}
                </ListGroupItem>
                <ListGroupItem>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                    {email}
                </ListGroupItem>
                <ListGroupItem>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2"/>
                    {from}
                </ListGroupItem>
                <ListGroupItem>
                    <FontAwesomeIcon icon={faBirthdayCake} className="mr-2"/>
                    {birth}
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="info" size="sm" block onClick={() => sendFriendRequest()} disabled={buttonClicked}>
                    {buttonClicked ? "Request Sent":"Add"}
                </Button>
            </Card.Body>
        </Card>

    );
}
    
export default UserCard;