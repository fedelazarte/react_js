import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = ({products}) =>{
    return (
    <div>
        {products.map((product) => {
        return <Item  key={product.id} product={product}/>;
    })}
    </div>
    
    );
   
    };

export default ItemList;