import React from 'react';
import './styles.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../../types/typeApp';

type Props = {
    item: CartItem
}

const Item = ({ item }: Props) => {
    return (
        <>
            <div className="shopping-cart-item">
                <div className="item-action">
                    <Button variant='secondary'>
                        <FontAwesomeIcon icon={faPlus} color='white' />
                        <FontAwesomeIcon icon={faMinus} color='white' />
                    </Button>
                </div>
                <div className="item-detail">
                    <div className="item-detail-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="item-detail-info">
                        <div className="item-detail-info">
                            {item.title}
                        </div>
                        <div className="item-detail-info-prices">
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
                <div className="item-action-remove">
                    <Button 
                        variant='danger'
                        title='Retir producto'
                    >
                    <FontAwesomeIcon icon={faTrashAlt} color='white' />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Item;