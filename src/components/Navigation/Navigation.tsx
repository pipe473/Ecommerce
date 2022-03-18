import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';



const Navigation = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </>
    )
}

export default Navigation;