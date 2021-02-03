import 'bootstrap/dist/css/bootstrap.min.css';
import plus from './mas.svg';
import menos from './menos.svg';
import React, {useState} from 'react';

const ItemCount = () => {
    const [carrito, setCarrito] = useState(0);
  return (
   <>
   <button onClick={()=>{setCarrito(carrito - 1)}}>
     <img src={menos} alt="" style={{height:'10px'},{width:'10px'}} />
   </button>
   
   {carrito}
   
   <button onClick={()=>{setCarrito(carrito + 1)}}>
     <img src={plus} alt="" style={{height:'10px'},{width:'10px'}} />
   </button>

   </>
  
  );

}

export default ItemCount;