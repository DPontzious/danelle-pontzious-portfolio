import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { IoIosMail } from 'react-icons/io';
import { DiVisualstudio } from "react-icons/di";

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: "#1e1e1e", padding: "0px" }} light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "#bf8f78" }} href="/"> </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#bf8f78" }} href="/About">About </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#bf8f78" }} href="/Portfolio">Portfolio <DiVisualstudio /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#bf8f78" }} href="/Contact">	 <IoIosMail style={{ fontSize: "30px" }} /> </NavLink>
                        </NavItem>

                    </Nav>
                </Navbar>
            </div >
        );
    }
}

export default NavbarComponent;