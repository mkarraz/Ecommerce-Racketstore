import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from './Loader'

const ItemListContainer = ({ greeting }) => {

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
            <div className="welcomeDiv">
                <p className="display-1 welcome">{greeting}</p>
            </div>

            <div>
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