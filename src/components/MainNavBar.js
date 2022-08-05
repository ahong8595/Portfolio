import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import "./style/MainNavBar.css";

class MainNavBar extends React.Component {
    render() {
        return <Navbar bg="light" expand="lg" className="navi">
            <Container>
                <Navbar.Brand className="link" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="link" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="link" href="/resume">Résume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
}

export default MainNavBar;