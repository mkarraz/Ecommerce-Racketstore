import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ViewProductWidget from './ViewProductWidget';
/* import { Link } from "react-router-dom"; */
/* import ItemCount from "./itemCount"; */



const Item = ({item}) => {

    return (
        <>
            <Card className="shadow itemCard" border="light" style={{ width: '18rem' }}>
                <img src={item.img} alt="" />
                <Card.Body>
                    <Card.Title className="titleCard">{item.name}</Card.Title>
                    <Card.Text className="itemPrice">
                        $ {item.price}
                    </Card.Text>
                    <div className="itemBtns">
                        <div className="itemAddToCart">
                            <Button className="viewDetailsBtn" >View Details <ViewProductWidget/></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )

}

export default Item