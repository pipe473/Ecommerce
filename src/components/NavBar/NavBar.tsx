import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;
