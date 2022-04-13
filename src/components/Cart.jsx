import React, { useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { context } from "../Context/CartContext";
import CartItem from "./CartItem";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartItems, removeItem, cartTotalCost } = useContext(context)
    
    if (cartItems.length === 0) {
        return (
            <Container fluid="lg" className="cartDiv">
                <Row>
                    <Col>
                        <p className="EmptyCartTitle">No hay productos para mostrar... </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="viewMoreDiv">
                        <Link to={`/`}><Button className="addToCartBtn " >View more products!</Button></Link>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <div>
                <Container fluid="lg" className="cartDiv">
                    <Row>
                        <Col className="cartBottomBorder d-flex" sm={3}>
                            <p className="cartTitle">CART</p>
                        </Col>
                    </Row>
                    {
                        cartItems.map((cartItem) => (
                            <Row className="itemCartMap" key={cartItem.id}>
                                <CartItem cartItem={cartItem} removeItem={removeItem} />
                            </Row>
                        ))
                    }
                    <Row className="totalCostDiv">
                        <Col sm={8}></Col>
                        <Col sm={2} className="totalCostTitle">
                            Total cost:
                        </Col>
                        <Col sm={2} className="totalCost">
                            $ {cartTotalCost()}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Cart