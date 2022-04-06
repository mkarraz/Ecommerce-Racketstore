import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from './Loader'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const apiUrl = "https://mocki.io/v1/765ea156-bdb7-47a5-ad9d-96b0cafcff1e"
    const { id } = useParams()

    const getItem = async () => {
        try {
            const response = await fetch(apiUrl)
            const products = await response.json()

            if (id) {
                const filterProduct = products.filter(
                    (element) => element.id.toString() === id
                )
                setProduct(filterProduct)
            } else {
                <h1>No hay ningún producto seleccionado</h1>
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
        getItem()
    }, [id])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    error ? (
                        <h1>Lo sentimos, ocurrió un error...</h1>
                    ) : (
                        product.map((itemDetail) => (
                            <div key={itemDetail.id}>
                                <ItemDetail itemDetail={itemDetail} />
                            </div>
                        ))
                    )
                )
            }
        </>
    )
}

export default ItemDetailContainer