import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { InitialProducts } from "../mock/InitialProducts";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProducts);
    }, 2000);
});


const ItemListContainer = ({ userName, greeting }) => {

    const apiUrl = "https://mocki.io/v1/765ea156-bdb7-47a5-ad9d-96b0cafcff1e"
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {brandName} = useParams()

    useEffect(() => {
      /*   promise
            .then((products) => {
            setProducts(products)
        }).catch((error) => {
            console.error("Error: ", error)
        })
        .finally(() => {
            setLoading(false)
        }) */
        fetch(apiUrl)
        .then(products => products.json())
        .then((products) => {
            if (brandName) {
                const filterProducts = products.filter(
                    (element) => element.brand === brandName
                )
                setProducts(filterProducts)
            }else{
                setProducts(products)
            } 
        }) 
    }, [brandName])
    
    return (
        <>
            <div>
                <p>Bienvenido, {userName}!</p>
                <p>{greeting}!</p>
                <ItemList productos={products} />
            </div>
        </>
    )
}

export default ItemListContainer