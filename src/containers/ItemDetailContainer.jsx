import React, { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount'
import ItemDetail from '../components/ItemDetail'


const getItems = () => {    
    return new Promise((resolve, reject) => {
        resolve({
              id:"1"
            , title:"Clásico"
            , description:"Enebro y Cilantro"
            , price:"$1200"
            , image:"./containers/botella.jpg"
            , stock:"20"
            , supplier:"Entre Amigos"
            , points:"4.5"
        })
    })
}

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    
    useEffect(() => {
        
        setTimeout(() => {
            getItems()
            .then(result => setProduct(result))
        }, 2000);
        
        return () => {
        }

    }, [])

    return (
        <div>
           <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer