import React, { Component } from 'react';
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">Le Grand Bleu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Accueil</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item>Menus sandwichs</NavDropdown.Item>
                        <NavDropdown.Item>Menus burgers</NavDropdown.Item>
                        <NavDropdown.Item>Menus tacos</NavDropdown.Item>
                        <NavDropdown.Item>Menus paninis</NavDropdown.Item>
                        <NavDropdown.Item>Menu enfant</NavDropdown.Item>
                        <NavDropdown.Item>Nos Tex-Mex</NavDropdown.Item>
                        <NavDropdown.Item>Nos assiettes</NavDropdown.Item>
                        <NavDropdown.Item>Nos sandwichs</NavDropdown.Item>
                        <NavDropdown.Item>Nos burgers</NavDropdown.Item>
                        <NavDropdown.Item>Nos paninis</NavDropdown.Item>
                        <NavDropdown.Item>Nos tacos</NavDropdown.Item>
                        <NavDropdown.Item>Nos extras</NavDropdown.Item>
                        <NavDropdown.Item>Nos desserts</NavDropdown.Item>
                        <NavDropdown.Item>Nos boissons</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>A propos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div> );
    }
}
 
export default MyNavbar;