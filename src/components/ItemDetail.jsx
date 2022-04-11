import React, { useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import ItemCount from "./ItemCount"
import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { context } from "../Context/CartContext";



const ItemDetail = ({ itemDetail }) => {

    const { name, brand, price, oldPrice, discount, stock, id, gripSize, gripSize2, description1, description2, img } = itemDetail
    const [addToCartClicked, setAddToCartClicked] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const { addItem, removeItem } = useContext(context)

    const onAdd = (itemCounter) => {
        setAddToCartClicked(true)
        setItemQty(itemCounter)
    }

    const handlerCheckOut = () => {
        addItem({ itemDetail }, itemQty)
    }
    const pruebaBorrado = () => {
        removeItem(id)
    }

    return (

        <Container fluid="sm" className="itemDetDiv">
            <Row>
                <Col className="fullBorder d-flex align-items-center" md={6} sm={12}>
                    <img src={img} className="img-fluid" alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <Row className="ItemDetRow1">
                        <p className="itemDetTit">{name}</p>
                        <p>Be the first to take advantage of the <span className="greenColor">OFFER</span>!</p>
                        <Row>
                            <Col className="centerAlign boldStyle" xs={5}><span className="actualPrice">${price}</span><span className="oldPrice">{oldPrice}</span></Col>
                            <Col xs={3} className="centerAlign1 boldStyle redColor sidesBorder"><span>{discount}% Off</span></Col>
                            <Col xs={3} className="centerAlign1 boldStyle greenColor">IN STOCK</Col>
                        </Row>
                    </Row>
                    <Row className="ItemDetRow2">
                        <Col xs={10}>
                            <Row className="gripDiv">
                                <Col xs={3}>Grip Size</Col>
                                <Col xs={7}>
                                    <Row>
                                        <Col xs={3} className="gripDetailsDiv boldStyle">{gripSize}</Col>
                                        <Col xs={1}></Col>
                                        <Col xs={3} className="gripDetailsDiv boldStyle">{gripSize2}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="ItemDetRow3">
                        <Col xs={10} className="itemCountDiv">
                            <Row >
                                <Col xs={12}>
                                    {!addToCartClicked ? (<ItemCount stock={stock} onAdd={onAdd} />)
                                        : (<Link to={`/cart`}><Button className="addToCartBtn" onClick={handlerCheckOut}>CHECKOUT</Button></Link>)}
                                    <Link to={`/cart`}><Button className="addToCartBtn" onClick={pruebaBorrado}>borrar</Button></Link>
                                </Col>
                            </Row>
                            <p className="smallNote margTop">Take advantage of the momentary <span className="greenColor">free shipping</span>!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="itemDescDiv">
                            <p className="itemDetDesc1">{description1}</p>
                            <p className="itemDetDesc2">{description2}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail