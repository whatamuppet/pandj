'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { basePath } from '@/next.config.mjs';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='border-bottom border-info border-2'>
            <Container>
                <Navbar.Brand className='text-info'>P and J</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='text-white' href={`${basePath}/`}>Home</Nav.Link>
                    <Nav.Link className='text-white' href={`${basePath}/turksandcaicos`}>Turks and Caicos</Nav.Link>
                    <Nav.Link className='text-white' href={`${basePath}/newyork`}>New York</Nav.Link>
                    <NavDropdown title={
                        <span className="text-white">Washington DC</span>
                    } id="dc-nav-dropdown">
                        <NavDropdown.Item href={`${basePath}/washingtondc2024`}>Cherry Blossom 2024</NavDropdown.Item>
                        <NavDropdown.Item href={`${basePath}/washingtondc2023`}>Christmas 2023</NavDropdown.Item>
                        <NavDropdown.Item href={`${basePath}/washingtondcdaytrip`}>Day Trip 2023</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;