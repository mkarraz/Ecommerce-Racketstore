import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const productosIniciales = [
    {
        name: "BABOLAT PURE DRIVE JUNIOR 25",
        price: 8999,
        stock: 5,
        id: 1,
        img: "https://cdnmedia.racquets4u.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/p/u/pure-drive-junior-25-tennis-racquet-black-blue-m.jpg",
    },
    {
        name: "HEAD YOUTEK GRAPHENE SPEED PRO TENNIS",
        price: 24999,
        stock: 4,
        id: 2,
        img: "https://cdnmedia.racquets4u.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/h/e/head-youtek-graphene-speed-pro-tennis-racquet-unstrung.jpg",
    },
    {
        name: "WILSON PRO STAFF PRECISION 100",
        price: 33999,
        stock: 3,
        id: 3,
        img: "https://cdnmedia.racquets4u.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/w/i/wilson-pro-staff-precion-100-tennis-racquet-strung.jpg",
    },
];



const ItemListContainer = ({ greeting, userName }) => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
          res(productosIniciales);
        }, 2000);
      });

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