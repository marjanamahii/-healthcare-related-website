
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header">
                <Navbar bg="light" variant="light" >
                    <Container>
                        <Navbar.Brand className="text-primary">
                            <img className="logo" src={logo} alt="" />{' '}
                            Medinova Health Care
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="menu">
                                <NavLink activeClassName="active" to="/home">Home</NavLink>
                                <NavLink activeClassName="active" to="/services">Services</NavLink>
                                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                                <NavLink activeClassName="active" to="/login">Sign In</NavLink>
                                <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>

                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div >
        </header>

    );
};

export default Header;