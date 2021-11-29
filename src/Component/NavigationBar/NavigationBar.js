import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" className=""  expand="lg">
                <Container >
                    <Navbar.Brand href="#" className="">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
                    <Navbar.Collapse id="navbarScroll" className="text-light">
                        
                    <Nav
                        className="me-auto my-auto my-lg-0 fs-5 fw-bold navText"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Home</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Home</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Home</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Home</a>
                        
                        
                        
                    </Nav>
                    <Form className="d-flex">
                        <input></input>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavigationBar;
