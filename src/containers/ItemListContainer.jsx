import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import productList from "./mocks/productList"
import ItemList from "../components/ItemList";
import ItemCount from "../components/ItemCount";




const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect (() => {
  const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve (productList), 3000);
  });

  myPromise.then((result) => setProducts(result))
  }, []);

return (
    <div>
      <a className="h1" href="#">{greeting}</a>
    <ItemList className='itemListCont' products = {products}/> 
    </div>
    

  );
  
}


export default ItemListContainer;

