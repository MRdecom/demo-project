import React from 'react'

type ImageProps = {
    src: string,
    alt?: string,
    className?: string
}

const ProductImage = ({ src, alt = '', className = '' }: ImageProps) => {
  return (
        <div className={`product-image-component ${className}`}>
            <img src={src} alt={alt}/>
        </div>
  )
}

export default ProductImage
