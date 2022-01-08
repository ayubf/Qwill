import React from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Register() {
        return (
            <div id='register'> 
                <Card>
                    <Card.Header>
                        Register
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' />
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='password' />
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
}

export default Register