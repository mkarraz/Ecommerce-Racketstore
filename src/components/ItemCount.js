import React from "react"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock, onAdd}) => {

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
            <div className="itemCountDetail">
                <Button className="qtyBtn" onClick={removeItem} size="sm">-</Button>
                <div className="itemCuantity">
                    <span style={{fontWeight: "bold"}}>{itemCounter}</span>
                </div>
                <Button className="qtyBtn" onClick={addItem} size="sm">+</Button>
            </div>
            <div className="itemAddToCart">
                <Button className="addToCartBtn" onClick={handlerAddToCart} >Añadir al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount