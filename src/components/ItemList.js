import React from "react"
import Item from './Item'
import Loader from './Loader'

const ItemList = ({ productos }) => { 

    return (
        <div className="itemRender">
            {
                productos.length > 0 ?
                    productos.map((card) => (
                        <div className="pruebita" key={card.id}>
                            <Item item={card} />
                        </div>
                    )) : (
                        <Loader />
                    )
            }
        </div>
    )
}

export default ItemList