import React, { createContext, useState } from 'react'

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCartQty, setTotalCartQty] = useState(0)

    const addItem = ({ itemDetail }, itemQty) => {

        const { name, price, id, img } = itemDetail

        if (isInCart(id)) {
            const itemTarget = cartItems.find((element) => element.id === id)
            itemTarget.qty = itemTarget.qty + itemQty //Actualizo la cantidad agregada
            setTotalCartQty(totalCartQty + itemQty)
            console.log(`Añadiste ${itemTarget.qty} items de ${itemTarget.name} al carrito`)
        } else {
            console.log(`Añadiste ${itemQty} items de ${name} al carrito`)
            const newCartItem =
            {
                name: name,
                price: price,
                id: id,
                img: img,
                qty: itemQty
            }
            setCartItems([...cartItems, newCartItem])
        }
    }

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(
            (element) => element.id !== id)
        setCartItems(updatedCart)
        console.log(`Item Eliminado`)
    }

    const clear = () => {
        setCartItems([])
    }

    const isInCart = (id) => {
        return cartItems.some((element) => element.id === id)
    }

    console.log(cartItems)

    return (
        <Provider value={{ cartItems, addItem, removeItem, clear }}>
            {children}
        </Provider>
    )
}

export default CustomProvider