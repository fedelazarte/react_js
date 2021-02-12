import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavbarComponent from './components/navbar/';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';




function App() {
  return (
   <>
   <NavbarComponent/>
   <ItemDetailContainer/>
   <ItemListContainer greeting={"¡Bienvenidos a una nueva experiencia en Gin!"}/>
   <ItemCount/>

   
   


   </>
  
  );

}

export default App;

