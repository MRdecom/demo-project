import React from 'react'
import { ItemRateInput } from '../../../components'
import { ProductImg } from './ProductImg'
import { ProductInfo } from './ProductInfo'
import { useHistory } from 'react-router-dom'
import { pageUrls } from '../../../constants/pageUrls'

export type ProductItemProps = {
    name: string,
    price: string,
    img: string,
    rating: number,
    id: string
}

const ProductItem = ({ name, img, price, rating, id }:ProductItemProps) => {
  const history = useHistory()
  const openDetail = () => {
    history.push(pageUrls.detailWithoutId + id)
  }
  return (
        <div className='product-item-component' onClick={openDetail}>
            <ProductImg src={img}/>
            <ProductInfo name={name} price={price}/>
            <ItemRateInput rating={rating} withDigits readonly/>
        </div>
  )
}

export default ProductItem
