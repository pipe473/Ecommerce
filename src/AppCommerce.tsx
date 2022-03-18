import * as React from 'react';
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as  Router } from 'react-router-dom';


const AppCommerce = () => {
  return (
   <Router>
     <Navigation />
   </Router>
  );
}

export default AppCommerce;
