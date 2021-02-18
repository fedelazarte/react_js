import './Item.css';

const Item = ({product}) => {
    return(
        <div className='items'>
            <h4>{product.title}</h4>
            <h5><em>{product.description}</em></h5>
            <ul>
                <li>Precio: {product.price}</li>
                <li>Stock: {product.stock}</li>
            </ul>


        </div>
    )
}

export default Item