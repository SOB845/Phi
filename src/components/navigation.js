import React, { Component } from 'react';
import {NavDropdown, Navbar, NavItem, Nav} from 'react-bootstrap';


class Navigation extends Component{
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
                    <form key= "form-inline" className="my-2-my-lg-0">
                        <input key="form-control" className="mr-sm-2" type="search" placeholder="Search Papers..." aria-label="Search"/>
                        <button key= "btn btn-outline-success" className="my-2my-sm-0" type="submit">Search</button>
                    </form>
                </Nav>
            </div>
            
        );
    }
}
export default Navigation;
