import React from "react"
import Item from './Item'
import Loader from './Loader'

const onAdd = (itemCounter) => {
    console.log(`El usuario seleccionó ${itemCounter} items.`)
}

const ItemList = ({ productos }) => { 

    return (
        <div className="itemRender">
            {
                productos.length > 0 ?
                    productos.map((card) => (
                        <div className="pruebita" key={card.id}>
                            <Item item={card} onAdd={onAdd}/>
                        </div>
                    )) : (
                        <Loader />
                    )
            }
        </div>
    )
}

export default ItemList