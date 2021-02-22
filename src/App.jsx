import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavbarComponent from './components/navbar/';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css'
import fondo from './images/bg-picture.jpg'
import ContactoContainer from './components/ContactoContainer';
import products from './containers/mocks/productList';



function App() {
  return (
   <>
   <body className='base' style={{backgroundImage:`url(${fondo})`}}>
   <BrowserRouter>
   
   <nav className='title'>
   <NavbarComponent/>
   </nav>
   <Switch>
   <Route exact path='/productos'>
   <ItemListContainer/>
   </Route>
   <Route exact path='/productos/:productosId'>
   <ContactoContainer/>
   </Route>
   </Switch>
   <footer className='redir'>
   
     <br/>
     
     <br/>
   </footer>
  
   </BrowserRouter>
   </body>
   
   


   </>
  
  );

}

export default App;

