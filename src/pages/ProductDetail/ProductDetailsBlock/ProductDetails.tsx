import React from 'react'
import { dateFormat } from '../../../utils/utils'

type ProductDetailsProp = {
    name: string,
    description: string,
    price: number,
    currency: string,
    arrivalDate: string,
    commentCount?: number,
    className?: string
}
const ProductDetails = ({ name, description, price, currency = '$', commentCount = 0, arrivalDate, className = '' }: ProductDetailsProp) => {
  return <div className={`product-details-component ${className}`}>
        <p><span>Product Name: </span> {name}</p>
        <div className='description-block'><span>Description: </span> {description}</div>
        <p><span>Price: </span> {price.toFixed(2)}{currency}</p>
        <p><span>Total comment: </span> {commentCount}</p>
        <p><span>Arrival Date: </span> {dateFormat(arrivalDate)}</p>
    </div>
}

export default ProductDetails
