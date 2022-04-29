import React, { useEffect, useState } from "react"
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from '../../components/Loader'
import { db } from '../../firebase/firebase'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { brand } = useParams()

    useEffect(() => {
        const itemsCollection = collection(db, 'ItemCollection')
        const itemsFiltered = query(itemsCollection, where("brand", "==", `${brand}`))

        if (brand) {
            getDocs(itemsFiltered)
                .then((result) => {
                    const docs = result.docs
                    if (docs.length > 0) {
                        const list = docs.map(item => {
                            const id = item.id
                            const product = {
                                id, ...item.data()
                            }
                            return product
                        })
                        setProducts(list)
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
        } else {
            getDocs(itemsCollection)
                .then((result) => {
                    const docs = result.docs
                    if (docs.length > 0) {
                        const list = docs.map(item => {
                            const id = item.id
                            const product = {
                                id, ...item.data()
                            }
                            return product
                        })
                        setProducts(list)
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
        }
    }, [brand])

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