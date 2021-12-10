import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem/ProductItem'
import { getProductList } from './actions'
import { ProductData } from '../../types/ProductData'

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const data = getProductList()
    setProducts(data)
  }, [])

  return (
        <div className='product-list-page'>
            { products &&
                products.map((pr:ProductData) => {
                  return <ProductItem id={pr.id} rating={pr.averageRate} name={pr.name} img={pr.icon} price={`${pr.price}${pr.currency}`} key={pr.id}/>
                })
            }
        </div>
  )
}

export default ProductList
