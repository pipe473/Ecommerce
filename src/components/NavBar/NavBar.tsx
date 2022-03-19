import React from 'react';
import { Nav, Navbar, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">Ecommerce</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                    </Nav>
                    </Navbar.Collapse>
                    <FontAwesomeIcon 
                      icon={faShoppingCart}
                      color="white" 
                      size="2x"
                      style={{cursor: 'pointer'}} />
                      <Badge bg='secondary'>8</Badge>
                </Container>
            </Navbar>
    )
}

export default NavBar;
