import React, {useEffect} from 'react';
import {ItemRateInput} from "../../../components";
import {ProductImg} from "./ProductImg";
import {ProductInfo} from "./ProductInfo";

type ProductItemProps = {
    name?: string,
    price?: string,
    img?: string,
    rating?: string,
}
// TODO: proplar bağlanacak.

const ProductItem = ({name,img,price,rating}:ProductItemProps) =>{
    useEffect(()=>{

    },[])

    return (
        <div className='product-item-component'>
            <ProductImg src={img}/>
            <ProductInfo name='Item NameItem NameItem NameItem NameItem NameItem NameItem Name' price='32$'/>
            <ItemRateInput rating={Math.floor(Math.random() * 5) + 1} withDigits readonly/>
        </div>
    )
}

export default ProductItem;