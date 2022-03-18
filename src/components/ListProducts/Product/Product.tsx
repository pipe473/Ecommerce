
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Productitem } from '../../../types/typeApp';

type Props =  {
    product: Productitem;
    handleAddToCart: ( product: Productitem ) => void
}

const Product = ( { product, handleAddToCart }: Props ) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                Precio:{product.price}€
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;