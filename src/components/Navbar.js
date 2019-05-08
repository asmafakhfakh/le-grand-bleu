import React, { Component } from 'react';
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">Le Grand Bleu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Accueil</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown" >
                        <NavDropdown.Item href='/menu'>Menus sandwichs</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Menus burgers</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Menus tacos</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Menus paninis</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Menu enfant</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Tex-Mex</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Assiettes</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Sandwichs</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Burgers</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Paninis</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Tacos</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Extras</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Desserts</NavDropdown.Item>
                        <NavDropdown.Item href='/menu'>Boissons</NavDropdown.Item>
                    </NavDropdown>
                   <Nav.Link href='/apropos'>A propos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div> );
    }
}
 
export default MyNavbar;