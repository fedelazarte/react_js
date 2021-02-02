
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartWidget';
import ItemListContainer from './ItemListContainer';


function NavbarComponent() {
  return (
   <>
   
   <h1> Gin entre amigos</h1>
   <CartWidget/> <ItemListContainer/>
   <h4 style={{color:'grey'}}>Variedades de productos:</h4>
   <table>
   <tr><a href="#">Clásico</a></tr>
   <tr><a href="#">De la casa</a></tr>
   <tr><a href="#">Personalizado</a></tr>
   <tr><a href="#">Purple</a></tr>
   </table>

   </>
  
  );

}

export default NavbarComponent;