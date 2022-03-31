import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { InitialProduct } from "../mock/InitialProduct";
import Loader from './Loader'

const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProduct);
    }, 2000);
});

const ItemDetailList = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
      getItem.then((product) => {
          setProduct(product)
      }).catch(() => {
          console.log("Algo salió mal")
      })
  }, [])
  
  return (
      <>
          <div>
              {
                  product.length > 0 ?
                      product.map((itemDetail) => (
                          <div className="pruebita" key={itemDetail.id}>
                              <ItemDetail itemDetail={itemDetail} />
                          </div>
                      )) : (
                          <Loader />
                      )
              }
          </div>
      </>
  )
}

export default ItemDetailList