import React from "react"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'


const ItemCount = ({ stock, onAdd }) => {

    const [itemCounter, setItemCounter] = useState(1)

    const addItem = () => {
        if (itemCounter < stock) {
            setItemCounter(itemCounter + 1)
        }
    }

    const removeItem = () => {
        if (itemCounter >= 1) {
            setItemCounter(itemCounter - 1)
        }
    }

    const handlerAddToCart = () => {
        if (itemCounter > 0) {
            onAdd(itemCounter)
        }
    }

    return (
        <>
            <Container>
                <Row >
                    <Col xs={6}>
                        <Row>
                            <div className='d-flex justify-content-evenly text-magenta'>
                                <Button variant='outline-dark qtyBtnSize' onClick={removeItem}>-</Button>
                                <div className="itemQty">{itemCounter}</div>
                                <Button variant="outline-dark qtyBtnSize" onClick={addItem}>+</Button>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Button className="addToCartBtn" onClick={handlerAddToCart} >ADD TO CART</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemCount