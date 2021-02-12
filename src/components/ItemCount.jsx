import 'bootstrap/dist/css/bootstrap.min.css';
import plus from './mas.svg';
import menos from './menos.svg';
import React, {useState} from 'react';

const ItemCount = () => {
    const [carrito, setCarrito] = useState(0);
    const min = 0;
    const max = 20;
  return (
   <>
   <button onClick={() =>{
     if(carrito > min) return setCarrito(carrito - 1)
     else alert("No es posible vender menos items :(");
   }
    }>

     <img src={menos} alt="" style={{height:'10px'},{width:'10px'}} />
   </button>
   
   {carrito}
   
   <button onClick={()=>{
     if(carrito < max) return setCarrito(carrito + 1)
     else alert("En este momento no tenemos más disponibilidad de este producto.")}}>
     <img src={plus} alt="" style={{height:'10px'},{width:'10px'}} />
   </button>
<br/>
   <button onClick={() =>{
    if(carrito > min) alert("Se agregaron "+carrito+ " item/s al carrito!")
    else alert("Debes seleccionar tus productos antes de agregarlos!")}
   } >Agregar al Carrito</button>

   </>
  
  );

}

export default ItemCount;