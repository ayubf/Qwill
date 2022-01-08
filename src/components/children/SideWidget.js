import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function SideWidget() {

        return (
            <div className='sidewidget'>

                    <Card.Header>Trending Genres</Card.Header>
                        <ListGroup>
                            <ListGroup.Item>
                                <Button variant='link'>
                                    #Genre1
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant='link'>
                                    #Genre2
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant='link'>
                                    #Genre3
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title>New to Qwill?</Card.Title>
                        <Card.Text>No worries, we got you covered</Card.Text>
                        <Button href="/wiki"> Read up on the User Guide</Button>
                    </Card.Body>    
                </Card>
            </div>
        )
    
}

export default SideWidget