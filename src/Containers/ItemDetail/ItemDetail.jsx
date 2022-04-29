import React, { useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import ItemCount from "../../components/ItemCount"
import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { context } from "../../Context/CartContext";

const ItemDetail = ({ itemDetail }) => {

    const { name, price, oldPrice, discount, stock, gripSize, gripSize2, description1, description2, img } = itemDetail
    const [addToCartClicked, setAddToCartClicked] = useState(false)
    const { addItem } = useContext(context)

    const onAdd = (itemCounter) => {
        setAddToCartClicked(true)
        addItem(itemDetail, itemCounter)
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
                            {
                                stock > 0 ?
                                    (<Col xs={3} className="centerAlign1 boldStyle greenColor"> STOCK: {stock}</Col>) :
                                    (<Col xs={4} className="centerAlign1 boldStyle redColor"> OUT of stock</Col>)
                            }
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
                                    {
                                        !stock ? (<Link to={`/`}><Button className="addToCartBtn " >View more products!</Button></Link>) :
                                            (!addToCartClicked ?
                                                (<ItemCount stock={stock} onAdd={onAdd} />)
                                                : (<Link to={`/cart`}><Button className="addToCartBtn">CHECKOUT</Button></Link>))
                                    }
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