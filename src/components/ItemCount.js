import React from "react"
import { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock, onAdd}) => {

    const [itemCounter, setItemCounter] = useState(1)

    const addItem = () => {
        if (itemCounter <= 4) {
            setItemCounter(itemCounter + 1)
        }
    }

    const removeItem = () => {
        if (itemCounter >= 1) {
            setItemCounter(itemCounter - 1)
        }
    }

    const addToCart = () => {
        if (itemCounter > 0) {
            onAdd(itemCounter)
        }
    }

    return (
        <>
            <div className="itemBtns">
                <div className="itemCountDetail">
                    <Button onClick={removeItem} variant="outline-info">-</Button>
                    <div className="itemCuantity">
                        <span>{itemCounter}</span>
                    </div>
                    <Button onClick={addItem} variant="outline-info">+</Button>
                </div>
                <div className="itemAddToCart">
                    <Button onClick={addToCart} variant="outline-info">Añadir al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount