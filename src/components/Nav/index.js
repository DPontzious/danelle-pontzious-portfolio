import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: "#f5f5f5" }} light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/About">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/events">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div >
        );
    }
}

export default NavbarComponent;