import React from "react";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";


function Login() {

        let navigate = useNavigate();

        return(
            <div id='login'>
                <Card>
                    <Card.Header>
                        Login
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={navigate("/", {replace: true})}>
                            <Form.Group>
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant='primary' type='submit'>
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
}


export default Login