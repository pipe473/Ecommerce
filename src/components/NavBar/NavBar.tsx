import React from 'react';
import { Nav, Navbar, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type Props = {
    handleOpen: (state: boolean) => void
} 

const NavBar = ({handleOpen}: Props) => {
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
                      size="lg"
                      style={{cursor: 'pointer', marginRight: '5px', borderRadius: '14px'}}
                      onClick={() => handleOpen(true) } />
                      <Badge bg='secondary'>8</Badge>
                </Container>
            </Navbar>
    )
}

export default NavBar;
