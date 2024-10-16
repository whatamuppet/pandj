'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { basePath } from '@/next.config.mjs';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='border-bottom border-info border-2'>
            <Container>
                <Navbar.Brand className='text-info' href={`${basePath}/`}>P and J</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='text-white' href={`${basePath}/`}>Home</Nav.Link>
                    <Nav.Link className='text-white' href={`${basePath}/turksandcaicos`}>Turks and Caicos</Nav.Link>
                    <Nav.Link className='text-white' href={`${basePath}/newyork`}>New York</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;