import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div>
            { cartItems.length}
        </div>
    )
}

export default Cart;