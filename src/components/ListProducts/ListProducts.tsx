import React from 'react';
import Product from '../../components/ListProducts/Product/Product';
import { Container } from 'react-bootstrap';
import useFetch from '../../hook/useFetch';
import { Productitem } from '../../types/typeApp';

const ListProducts = () => {

    const { products, isLoading } = useFetch();

    // console.log(products);   
    
    const handleAddToCart = (product: Productitem) => {
        console.log('Agregando...');        
    }

    return (
        <>
            <Container className="home">
                {
                    products.map(product => (
                        <Product 
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                }
            </Container>
        </>
    )
}

export default ListProducts;