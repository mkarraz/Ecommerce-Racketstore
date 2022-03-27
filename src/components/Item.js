import React from "react"
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({item}) => {

    return (
        <>
            <Card className="shadow itemCard" border="light" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={item.img} /> */}
                <img src={item.img} alt="" />
                <Card.Body>
                    <Card.Title className="titleCard">{item.name}</Card.Title>
                    <Card.Text className="itemPrice">
                        $ {item.price}
                    </Card.Text>
                    <div className="itemBtns">
                        <ItemCount stock={item.stock} />
                    </div>
                </Card.Body>
            </Card>
        </>
    )

}

export default Item