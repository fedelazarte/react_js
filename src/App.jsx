import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavbarComponent from './components/navbar/';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css'
import fondo from './images/bg-picture.jpg'



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
   <Route exact path='/detalle'>
   <ItemDetailContainer/>
   </Route>
   </Switch>
   <footer className='redir'>
    <Link to={'/'} className='link0'>Inicio</Link>
     <br/>
     <Link to={'/productos'} className='link1'>Ver Productos</Link>
     <br/>
     <Link to={'/detalle'} className='link2'>Ver Detalle</Link>
   </footer>
  
   </BrowserRouter>
   </body>
   
   


   </>
  
  );

}

export default App;

