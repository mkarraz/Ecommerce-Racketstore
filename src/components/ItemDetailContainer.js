import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { InitialProduct } from "../mock/InitialProduct";
import Loader from './Loader'
import { useParams } from "react-router-dom";

const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProduct);
    }, 2000);
});

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    const apiUrl = "https://mocki.io/v1/765ea156-bdb7-47a5-ad9d-96b0cafcff1e"
    const {id} = useParams()
 
    useEffect(() => {
          fetch(apiUrl)
          .then(products => products.json())
          .then((products) => {
              if (id) {
                  const filterProduct = products.filter(
                      (element) => element.id.toString() === id
                  )
                  setProduct(filterProduct)
              }else{
                  <h1>No hay ningún producto seleccionado</h1>
              } 
          }) 
      }, [id])

  return (
      <>
              {
                  product.length > 0 ?
                      product.map((itemDetail) => (
                          <div key={itemDetail.id}>
                              <ItemDetail itemDetail={itemDetail} />
                          </div>
                      )) : (
                          <Loader />
                      )
              }
      </>
  )
}

export default ItemDetailContainer