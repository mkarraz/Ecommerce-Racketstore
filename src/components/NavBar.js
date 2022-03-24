import React from "react";
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import logo from '../img/logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div>
                    <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        width="170"
                        height="80"
                        className="d-inline-block align-top"
                        alt="RacketStore logo"
                        />
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#store">Store</Nav.Link>
                            <NavDropdown title="Brands" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Babolat</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Head</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Wilson</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider/>
                            <Nav.Link href="#store"><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar