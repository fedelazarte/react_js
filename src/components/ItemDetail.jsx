import React, { useState } from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'


const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(1)

    return (
     <>
            <div className='itemDetail__info'>
                <div className='itemDetail__description'>
                    <h2>{product.title}</h2>
                    <p className='itemDetail__price'>{product.price}</p>
                    <p className='itemDetail__descriptionItem'>{product.description}</p>
                </div>
                <div className='itemDetail__options'>
                    <div className='itemDetail__stock'>
                        <div className='itemDetail__stockSelect'>
                            <ItemCount/>
                        </div>
                    </div>
                </div>
            </div>
            </>)}


export default ItemDetail