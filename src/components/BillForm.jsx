import React, { useState } from "react"
import Button from 'react-bootstrap/Button'

const BillForm = ({ checkout }) => {

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
        checkout(buyerDetails)
    }

    return (
        <form onSubmit={checkoutHandler} onChange={formInputHandler}>
            <input className="generalInputs" value={buyerDetails.buyerName} required type="text" name="buyerName" placeholder="Full Name"></input>
            <input className="generalInputs" value={buyerDetails.buyerPhoneNumber} type="phone" name="buyerPhoneNumber" placeholder="Phone Number"></input>
            <input className="generalInputs" value={buyerDetails.buyerEmail} type="email" name="buyerEmail" placeholder="email"></input>
            <Button type="submit" className="addToCartBtn">CHECKOUT</Button>
        </form>
    )
}

export default BillForm