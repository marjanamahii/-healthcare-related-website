import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" variant="light" >
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="" />{' '}
                    Health Care
                </Navbar.Brand>

                <Container>
                    <Nav>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;