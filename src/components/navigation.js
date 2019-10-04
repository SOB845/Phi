import React, { Component } from 'react';
import {NavDropdown, Navbar, NavItem} from 'react-bootstrap';


class Nav extends Component{
    render() {
        return (
            <div className = "navig">
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="signin">Sign in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="papers">All papers</Nav.Link>
                    </Nav.Item>

                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Contribute</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Visit Pi.ai</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
            
        );
    }
}
export default Nav;
