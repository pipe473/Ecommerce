import React, { useState } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Sidebar from './components/SIdebar/Sidebar';
import { BrowserRouter as  Router } from 'react-router-dom';


const AppCommerce = () => {

  const [show, setShow] = useState(false);

  return (
   <Router>
     <Navigation handleOpen={ setShow } />
     {show && <Sidebar handleClose={setShow} />}
   </Router>
  );
}

export default AppCommerce;
