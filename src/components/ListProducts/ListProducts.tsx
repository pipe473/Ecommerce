import React from 'react';

import { Container } from 'react-bootstrap';
import useFetch from '../../hook/useFetch';

const ListProducts = () => {

    const { products } = useFetch();

    console.log(products);    

    return (
        <div>
            <h1>Desde ListProducts</h1>
        </div>
    )
}

export default ListProducts;