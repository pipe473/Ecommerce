
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Productitem } from '../../../types/typeApp';
import './styles.scss';

type Props =  {
    product: Productitem;
    handleAddToCart: ( product: Productitem ) => void
}

const Product = ( { product, handleAddToCart }: Props ) => {
    return (
        <Card style={{ width: '16rem', margin: '5px' }}>
            <Card.Img variant="top" src={product.image} className="card-img"/>
            <Card.Body>
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Card.Text className="card-description">
                    {product.description}
                </Card.Text>
                Precio:{product.price}€
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;