import React from "react"
import Item from './Item'

const ItemList = ({ products }) => {

    return (
        <div className="itemRender">
            {
                products.map((card) => (
                    <div key={card.id}>
                        <Item item={card} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList