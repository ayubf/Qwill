import React from "react";


import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function  TopBar() {
    

        return (
          <Navbar id='topbar' expand='lg'>
            
            <Container id='bar'>
              <Navbar.Brand href='/' id='title'>Qwill</Navbar.Brand>
               <Nav className='me-auto'>
                <Form className="d-flex" >
                  <FormControl
                    id='widesearch'
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button variant="primary"> Search </Button>
                </Form>
               </Nav>
              <Nav id='topbaroptions' variant='pills'>
              <Nav.Item>
                    <Nav.Link href='/wiki'>
                      <br/> Wiki
                    </Nav.Link>
                  </Nav.Item> 
                <Nav.Item>
                    <Nav.Link href='/post'>
                      <br/> Post
                    </Nav.Link>
                  </Nav.Item> 
                  <Nav.Item>
                    <Nav.Link href='/newpost'>
                      <br/>New Post
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/settings'>
                      <br />Settings
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>
                      <Dropdown variant='link'>

                        <Dropdown.Toggle  variant='link' >

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item as='button'> Log Out   </Dropdown.Item>
                          <Dropdown.Item as='button'> Light Mode </Dropdown.Item>
                        </Dropdown.Menu>

                      </Dropdown>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Button href="/login">Login</Button>
                    <Button href="/register">Resgister</Button>
                  </Nav.Item>

              </Nav>
            
            </Container>
          
          </Navbar>
        )

    
}

export default TopBar
