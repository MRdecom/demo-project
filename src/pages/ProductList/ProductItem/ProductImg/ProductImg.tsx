import React from 'react'

type ItemInfoProps = {
    src?: string,
    alt?: string,
    className?: string
}

const ProductImg = ({ src = '', className = '', alt = '' }:ItemInfoProps) => {
  return (
        <div className={`product-img ${className}`}>
            {
                src && <img src={src} alt={alt}/>
            }
        </div>
  )
}

export default ProductImg
