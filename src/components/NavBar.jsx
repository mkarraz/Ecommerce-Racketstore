import React, { useContext } from "react"
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import logo from '../img/logo.png'
import CartWidget from './CartWidget'
import { BiUserCircle } from "react-icons/bi"
import Badge from 'react-bootstrap/Badge'
import { context } from "../Context/CartContext"

const NavBar = ({ userName }) => {

    const { totalCartQty } = useContext(context)

    const brands = [
        { name: "Babolat", route: "brands/babolat", id: 1 },
        { name: "Head", route: "brands/head", id: 2 },
        { name: "Wilson", route: "brands/wilson", id: 3 }
    ]

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div>
                    <Navbar.Brand as={NavLink} to="/">
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="userIcon" as={NavLink} to="/"><BiUserCircle /> {userName}</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <NavDropdown title="Brands" id="basic-nav-dropdown">
                                {brands.map((element) => {
                                    return (
                                        <NavDropdown.Item as={NavLink} key={element.id} to={element.route}>{element.name}</NavDropdown.Item>
                                    )
                                })}
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <Nav.Link as={NavLink} to="/cart">
                                <CartWidget />
                                {totalCartQty !== 0 && (<Badge pill bg="danger">{totalCartQty}</Badge>)}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar