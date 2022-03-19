import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';

type Props = {
    handleOpen: (state: boolean) => void
} 

const Navigation = ({ handleOpen }: Props) => {
    return (
        <>
            <NavBar handleOpen={ handleOpen } />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </>
    )
}

export default Navigation;