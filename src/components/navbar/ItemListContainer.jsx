import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartWidget';



function ItemListContainer() {
    const greeting = () => {
        alert("¿Estás seguro que terminaste de comprar?")
    }
  return (
   <>
 
        <button onClick={greeting}>Pagar</button>
   </>
  
  );

}

export default ItemListContainer;