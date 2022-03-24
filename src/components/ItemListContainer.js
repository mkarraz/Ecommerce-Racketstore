import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const { greeting, userName } = props
    const stock = 5

    const onAdd = (itemCounter) => {
        console.log(`El usuario seleccionó ${itemCounter} items.`)
    }

    return (
        <>
            <div>
                <h1>Bienvenido, {userName}!</h1>
                <h4>{greeting}</h4>
                <ItemCount stock={stock} onAdd={onAdd} />
            </div>
        </>
    )
}

export default ItemListContainer