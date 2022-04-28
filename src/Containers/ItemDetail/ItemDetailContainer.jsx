import React, { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from "./ItemDetail";
import Loader from '../../components/Loader'
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const itemDetailFiltered = doc(db, 'ItemCollection', `${id}`)

        getDoc(itemDetailFiltered)
            .then((result) => {
                if (result.exists()) {
                    setProduct({
                        id: result.id, ...result.data()
                    })
                } else {
                    setError(true) 
                }
            })
            .catch(error => {
                setError(true)
                console.log(`Error: ${error}`)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [id])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    error ? (
                        <h1>We're sorry, something went wrong...</h1>
                    ) : (
                        <ItemDetail itemDetail={product} />
                    )
                )
            }
        </>
    )
}

export default ItemDetailContainer