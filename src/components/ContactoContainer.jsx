import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './Item.css'
const SegundoComponent = () => {
    const{productosId} = useParams();
    const products = [{id:"1", title:"Clásico", description:"Enebro y Cilantro", price:"$1200", stock:"20", supplier:"Entre Amigos", points:"4.5"}
    ,{id:"2", title:"De la Casa", description:"Enebro y Yerba Buena", price:"$1300", stock:"15"}
    ,{id:"3", title:"Purple", description:"Enebro y Lavanda", price: "$1350", stock:"12"}
    ,{id:"4", title:"Ginnamon", description:"Enebro y Canela", price:"$1400", stock:"18"}
    ,{id:"5", title:"Cardamomo", description:"Enebro y Cardamomo", price:"$1400", stock:"20"}
    ,{id:"6", title:"Personalizado", description:"Enebro y botánico a elección", price:"$1500", stock:"on demand"}]

useEffect(() => {
    products.map(producto => {
        if(producto.id.toString() === productosId){
            return producto;
        } else {
            return null;
        }
    })
    return () => {

    }
}, [productosId]);

  return <p className='detalles'> El producto seleccionado es: {productosId} </p> 

}

export default SegundoComponent;