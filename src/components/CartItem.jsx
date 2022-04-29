import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const CartItem = ({ cartItem, removeItem }) => {

    const { name, price, id, img, qty } = cartItem

    const removeHandler = () => {
        removeItem(id)
    }

    return (
        <>
            <Col lg={2} sm={5}>
                <img src={img} className="img-fluid detailsCartImg" alt="" />
            </Col>
            <Col className="detailsCartDiv" lg={7} sm={5}>
                <Row className='cartItemTitle'>{qty}x {name}</Row>
                <Row className='greenColor'>
                    <Col lg={6} md={6} sm={6} className="cartSubItemTitle">Free Shipping</Col>
                    <Col lg={6} md={6} sm={6} className="cartSubItemTitle">
                        <Button variant="outline-primary" onClick={removeHandler}>Remove</Button>
                    </Col>
                </Row>
            </Col>
            <Col className="priceCartDiv" lg={3}>
                $ {price}
            </Col>
        </>
    )
}

export default CartItem