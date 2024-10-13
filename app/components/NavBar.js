'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">P and J</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/turksandcaicos">Turks and Caicos</Nav.Link>
                    <Nav.Link href="/newyork">New York</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;