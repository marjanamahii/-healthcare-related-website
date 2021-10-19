import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png'
import "./Header.css";
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { handleLogout, user } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <header>
            <div className="header">
                <Navbar bg="light" variant="light" >
                    <Container>
                        <Navbar.Brand>
                            <img className="logo" src={logo} alt="" />{' '}
                            Health Care
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="menu">
                                <NavLink activeClassName="active" to="/home">Home</NavLink>
                                <NavLink activeClassName="active" to="/services">Services</NavLink>
                                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                                <NavLink activeClassName="active" to="/login">Sign In</NavLink>
                                <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
                                {user.email ? (
                                    <NavDropdown
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <button onClick={handleLogout} className="btn btn-danger">
                                            Sign Out
                                        </button>
                                    </NavDropdown>
                                ) : (
                                    <><Link to="/login">
                                        <li>Sign In</li>
                                    </Link>
                                        <Link to="/signup">
                                            <li>Sign Up</li>
                                        </Link>
                                    </>


                                )}

                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div >
        </header>

    );
};

export default Header;