import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                    <Link className="navbar-brand" to="/">Ecommerce</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;
