import React from 'react'
import hat from './hat.png';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar classname="navbar" expand="lg" variant="dark">
            <Navbar.Brand href="/">Richard Lloyd</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;