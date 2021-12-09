import React from 'react'

type ButtonProp = {
    buttonText: string,
    onClick: ()=>void
}

const Button = ({ buttonText, onClick }:ButtonProp) => {
  return (
        <button className='solid-button' onClick={onClick}>{buttonText}</button>
  )
}

export default Button
