import './Item.css';
import ItemCount from './ItemCount';
import {NavLink} from 'react-router-dom';


const Item = ({product}) => {
    return(
        <div className='col'>
            <NavLink to={`/productos/${product.id}`} activeClassName='selected'><td><h4>{product.title}</h4></td></NavLink><td><h4>{product.title}</h4></td>
            <th><h5><em>{product.description}</em></h5></th>
            <th>Precio: {product.price}</th>
            <th>Stock: {product.stock}</th>
            <th><ItemCount/></th>
        </div>
    )
}

export default Item