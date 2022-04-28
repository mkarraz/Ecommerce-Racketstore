import React, { useContext, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { context } from "../Context/CartContext"
import CartItem from "./CartItem"
import Button from 'react-bootstrap/Button'
import { collection, serverTimestamp, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { Link } from "react-router-dom"
import swal from 'sweetalert'
import { useNavigate } from 'react-router'

const Cart = () => {

    const { cartItems, removeItem, cartTotalCost, clear } = useContext(context)
    const navigate = useNavigate()
    const [buyerDetails, setBuyerDetails] = useState({
        buyerName: "",
        buyerPhoneNumber: "",
        buyerEmail: ""
    })

    const formInputHandler = (e) => {
        setBuyerDetails({
            ...buyerDetails,
            [e.target.name]: e.target.value
        })
    }
    
    const checkoutHandler = (e) => {
        e.preventDefault()

        const billDetails  = {
            buyer: {...buyerDetails},
            items: cartItems,
            date: serverTimestamp(),
            total: cartTotalCost()
        }
    
        const saleCollection = collection(db, "Sales")
    
        addDoc(saleCollection, billDetails)
            .then((res) => {
                swal({
                    title: 'Purchase done!',
                    text: `
                    Your Order ID: ${res.id}\n
                    Total: $${cartTotalCost()}`,
                    icon: 'success'
                    })
            })
            .then((res) => {
                cartItems.forEach(element => {
                    const qtyBought = element.qty
                    const updateCollectionStock = doc(db, "ItemCollection", `${element.id}`)
                    getDoc(updateCollectionStock)
                        .then((result) => {
                            const stockUpdated = result.data().stock - qtyBought
                            updateDoc(updateCollectionStock, {"stock": stockUpdated})
                        })
                });
                /* const updateCollectionStock = doc(db, "ItemCollection", `${cartItems.id}`)
                updateDoc(updateCollectionStock, {stock: }) */
                clear()
                navigate('/')
            })

            
    }
    

    if (cartItems.length === 0) {
        return (
            <Container fluid="lg" className="cartDiv">
                <Row>
                    <Col>
                        <p className="EmptyCartTitle">Your cart is empty... </p>
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
                    <Row>
                        <Col lg={6} className="formDiv">
                            <form>
                                <input className="generalInputs" value={buyerDetails.buyerName} onChange={formInputHandler} required type="text" name="buyerName" placeholder="Full Name"></input>
                                <input className="generalInputs" value={buyerDetails.buyerPhoneNumber} onChange={formInputHandler} type="phone" name="buyerPhoneNumber" placeholder="Phone Number"></input>
                                <input className="generalInputs" value={buyerDetails.buyerEmail} onChange={formInputHandler} type="email" name="buyerEmail" placeholder="email"></input>
                                <Button type="submit" onClick={checkoutHandler} className="addToCartBtn">CHECKOUT</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Cart