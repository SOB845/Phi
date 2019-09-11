import React, { Component } from 'react';
import {NavDropdown, Navbar, NavItem} from 'react-bootstrap';


class Nav extends Component{
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey={3.1}>Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey={3.2}>Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey={3.3}>Something else here</NavDropdown.Item>
                            <NavDropdown.Item divider />
                            <NavDropdown.Item eventKey={3.3}>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
            
        );
    }
}
export default Nav;