
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartWidget';
import './navbar.css'
import {Link} from 'react-router-dom';
import ItemListContainer from '../../containers/ItemListContainer';


function NavbarComponent() {
  return (
   <>
   <div style={{display:'flex', justifyContent:'space-around'}}>
   <Link to={'/'} className='link0'><h1 style={{marginLeft:'-300px'}} className='title'> Gin entre amigos</h1></Link>
   <CartWidget/>
   </div>
   
   {/* <h4 style={{color:'grey'}}>Variedades de productos:</h4>
   <table>
   <tr><a href="#">Clásico</a></tr>
   <tr><a href="#">De la casa</a></tr>
   <tr><a href="#">Personalizado</a></tr>
   <tr><a href="#">Purple</a></tr>
   </table> */}
   <div  style={{display:'flex', justifyContent:'space-around'}}>
     <a href="#" className='menu0'>Conocenos</a>
     <Link to={'/productos'} className='link1'><a href="#" className='menu1'>Compranos</a></Link>
     <a href="#" className='menu2'>Contactanos</a>
   </div>

   </>
  
  );

}

export default NavbarComponent;