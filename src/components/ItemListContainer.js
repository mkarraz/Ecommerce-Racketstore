import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { InitialProducts } from "../mock/InitialProducts";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProducts);
    }, 2000);
});


const ItemListContainer = ({ greeting, userName }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        promesa.then((products) => {
            setProducts(products)
        }).catch(() => {
            console.log("Algo salió mal")
        })
    }, [])
    
    return (
        <>
            <div>
                <h1>Bienvenido, {userName}!</h1>
                <h4>{greeting}</h4>
                <ItemList productos={products} />
            </div>
        </>
    )
}

export default ItemListContainer