import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { InitialProducts } from "../mock/InitialProducts";
import { useParams } from "react-router-dom";
import Loader from './Loader'


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProducts);
    }, 2000);
});


const ItemListContainer = ({ userName, greeting }) => {

    const apiUrl = "https://mocki.io/v1/765ea156-bdb7-47a5-ad9d-96b0cafcff1e"
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { brandName } = useParams()

    const getItems = async () => {
        try {
            const response = await fetch(apiUrl)
            const products = await response.json()

            if (brandName) {
                const filterProducts = products.filter(
                    (element) => element.brand === brandName
                )
                setProducts(filterProducts)
            } else {
                setProducts(products)
            }
        }
        catch {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getItems()
    }, [brandName])


    return (
        <>
            <div>
                <p>Bienvenido, {userName}!</p>
                <p>{greeting}!</p>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        error ? (
                            <h1>Lo sentimos, ocurrió un error...</h1>
                        ) : (
                            <ItemList products={products} />
                        )  
                    )
                }
            </div>
        </>
    )
}

export default ItemListContainer