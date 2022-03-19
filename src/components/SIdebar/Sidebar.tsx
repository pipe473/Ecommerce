import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type Props = {
    handleClose: (state: boolean) => void
} 

const Sidebar = ({ handleClose}: Props ) => {
    return (
        <Offcanvas 
            show={true} 
            onHide={() => handleClose(false)} 
            placement='end'
            sroll={ true } >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <FontAwesomeIcon 
          icon={faShoppingCart} 
          color="black"
          size="sm"
          style={{marginRight: '5px'}} />Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Cart
        </Offcanvas.Body>
      </Offcanvas>  
    )
}

export default Sidebar;