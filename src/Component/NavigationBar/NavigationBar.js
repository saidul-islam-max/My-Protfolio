import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './NavigationBar.css'
import logo from './sij.png'

const NavigationBar = () => {
    return (
        <div className="">
            <Navbar className=""  expand="lg">
                <Container >
                <Link className="navbar-brand" to="/home">
                 <img src={logo} width="150" height="60" width="100" alt="" />
                </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
                    <Navbar.Collapse id="navbarScroll" className="text-light justify-content-end">
                        
                    <Nav
                        className=" my-lg-0 fs-5 navText"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        
                        <NavLink to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black",
                            
                        }}
                        >Home</NavLink>
                        <NavLink to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >Resume</NavLink>
                        <NavLink to="/service"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >Serivce</NavLink>

                        <NavLink to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >Contact</NavLink>
                        
                        <NavLink to="/project"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}
                        >Project</NavLink>
                         
                    </Nav>
                    
                
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavigationBar;
