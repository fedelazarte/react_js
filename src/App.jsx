import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';




function App() {
  return (
   <>
   <NavbarComponent/>
   <ItemListContainer greeting={"¡Bienvenidos a una nueva experiencia en Gin!"}/>
   <ItemCount/>
   
   


   </>
  
  );

}

export default App;

