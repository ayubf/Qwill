import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function PostForm() {

        return(
            <div className='postform'>
                <Card>
                    <Card.Header>
                    <h5>
                        New Post
                    </h5>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    <h6>Title</h6>
                                </Form.Label>
                                <Form.Control type='text' placeholder='Title' />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    <h6>Content</h6>
                                </Form.Label>
                                <Form.Control as="textarea"  className='postArea' rows={10} cols={12.5} placeholder='Write here....'/>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>
                                    <h6>Tags</h6>
                                </Form.Label>
                                <Form.Control as="textarea" className='postArea' rows={5} cols={7.25} placeholder='#' />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );

}

export default PostForm