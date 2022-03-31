import React from "react"
import { Container, Row, Col} from 'react-bootstrap'
import ItemCount from "./ItemCount"

const onAdd = (itemCounter) => {
    console.log(`El usuario seleccionó ${itemCounter} items.`)
}

const ItemDetail = ({itemDetail}) => {

    return (

        <Container fluid="sm">
            <Row>
                <Col className="fullBorder d-flex align-items-center" md={6} sm={12}>
                    <img src={itemDetail.img} className="img-fluid" alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <Row className="ItemDetRow1">
                        <p className="itemDetTit">{itemDetail.name}</p>
                        <p>Be the first to take advantage of the <span className="greenColor">OFFER</span>!</p>
                        <Row>
                            <Col className="centerAlign boldStyle" xs={5}><span className="actualPrice">${itemDetail.price}</span><span className="oldPrice">{itemDetail.oldPrice}</span></Col>
                            <Col xs={3} className="centerAlign1 boldStyle redColor sidesBorder"><span>{itemDetail.discount}% Off</span></Col>
                            <Col xs={3} className="centerAlign1 boldStyle greenColor">IN STOCK</Col>
                        </Row>
                    </Row>
                    <Row className="ItemDetRow2">
                        <Col xs={10}>
                            <Row className="gripDiv">
                                <Col xs={3}>Grip Size</Col>
                                <Col xs={7}>
                                    <Row>
                                        <Col xs={3} className="gripDetailsDiv boldStyle">{itemDetail.gripSize}</Col>
                                        <Col xs={1}></Col>
                                        <Col xs={3} className="gripDetailsDiv boldStyle">{itemDetail.gripSize2}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="ItemDetRow3">
                        <Col xs={10} className="itemCountDiv">
                            <Row >
                                <Col xs={12}><ItemCount stock={itemDetail.stock} onAdd={onAdd}/></Col>
                            </Row>
                            <p className="smallNote margTop">Take advantage of the momentary <span className="greenColor">free shipping</span>!</p>
                        </Col>
                    </Row>
                    <Row className="ItemDetRow4">
                        <Col xs={12} className="itemDescDiv">
                            <p className="itemDetDesc1">{itemDetail.description1}</p>
                            <p>{itemDetail.description2}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )

}

export default ItemDetail