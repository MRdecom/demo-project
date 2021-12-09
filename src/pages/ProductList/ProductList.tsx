import React, {useEffect} from 'react';
import ProductItem from "./ProductItem/ProductItem";

const ProductList = () =>{
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='product-list-page'>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    )
}

export default ProductList;