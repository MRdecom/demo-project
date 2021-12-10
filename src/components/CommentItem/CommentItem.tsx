import React from 'react'
import { ItemRateInput } from '../ItemRateInput'

type CommentItemProps = {
    commentDate: string,
    text: string,
    rate: number,
    className?: string
}
const CommentItem = ({ commentDate, text, rate, className = '' }:CommentItemProps) => {
  return (<div className={`comment-item-component ${className}`}>
        <h5>{commentDate}</h5>
        <p>{text}</p>
        <ItemRateInput rating={rate} readonly withDigits/>
    </div>)
}

export default CommentItem
