import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ViewProductWidget from './ViewProductWidget';
import { Link } from "react-router-dom";

const Item = ({ item }) => {

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
                            <Link key={item.id} to={`/item/${item.id}`}><Button className="viewDetailsBtn" >View Details <ViewProductWidget /></Button></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item