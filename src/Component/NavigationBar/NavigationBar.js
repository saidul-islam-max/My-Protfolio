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
                    <Navbar.Collapse id="navbarScroll" className="text-light justify-content-end">
                        
                    <Nav
                        className=" my-lg-0 fs-5 navText"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Home</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Service</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">About</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Resume</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Work</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Blog</a>
                        <a href="#action1" className="" className="mx-2  p-1 my-2">Contact</a>
                         
                    </Nav>
                    
                
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavigationBar;
