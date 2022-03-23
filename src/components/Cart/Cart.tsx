import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './styles.scss';
import Item from './Item/Item';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="shopping-cart">
            { cartItems.map(item => (
                <Item key={item.id} item={item} />
            ))
            }
        </div>
    )
}

export default Cart;