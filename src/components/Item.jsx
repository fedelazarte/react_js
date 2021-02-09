const Item = ({product}) => {
    return(
        <div>
            <h3>{product.title}</h3>
            <h5><em>{product.description}</em></h5>
            <ul>
                <li>Precio: {product.price}</li>
                <li>Stock: {product.stock}</li>
            </ul>


        </div>
    )
}

export default Item