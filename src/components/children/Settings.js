import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function Settings() {

        return(


            <div id='main'>
                <div className='whitewidget'></div>
                <div className='widgetarea'>
                    <div className='postarea'>
                        <Card>
                            <Card.Header id='prof'>
                            Profile
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className='opt'>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control size='sm' type="text" />
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control size="sm" as="textarea" rows={2.5} style={{resize:"none"}} cols={3.125} placeholder='Write here....'/>
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Form.Label>Profile Picture</Form.Label> <br />
                                        <Form.Control type='file' />
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control size="sm" as="select">
                                            <option></option>
                                            <option>Other</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Button size='sm'>
                                            Save
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>


                        <Card>
                            <Card.Header id='acct'>
                                Account
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className='opt'>
                                        <Form.Label >Old Password</Form.Label>
                                        <Form.Control size='sm' className='opt' type='password'/>
                                        <Form.Label > New Password</Form.Label>
                                        <Form.Control size='sm' className='opt' type='password'/>
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control size='sm' type='password' />
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Form.Label>Verify Email</Form.Label>
                                        <Form.Control size='sm' type='email' />
                                    </Form.Group>
                                    <Form.Group className='opt'>
                                        <Button size='sm'>
                                            Save
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Deactivate Account
                            </Card.Header>
                            <Card.Body>
                                <Button variant='danger' size='sm'>
                                    DEACTIVATE THIS ACCOUNT
                                </Button>
                            </Card.Body>
                        </Card>

                    </Card>
                    </div>

                </div>
                <div className='whitewidget'></div>
            </div>

        )
}


export default Settings