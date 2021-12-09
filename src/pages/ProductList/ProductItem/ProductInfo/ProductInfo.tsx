import React from 'react';

type ItemInfoProps = {
    name?: string,
    price?: string,
    className?: string
}

const ProductInfo = ({name='', className='', price=''}:ItemInfoProps ) =>{
    return (
       <div className={`product-info ${className}`}>
           <p><span>Name: </span> {name}</p>
           <p><span>Price: </span> {price}</p>
       </div>
    )
}

export default ProductInfo;