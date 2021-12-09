import React, { useState } from 'react'
import { Comment } from '../../types/CommentItemType'
import { TextInput } from '../TextInput'
import { ItemRateInput } from '../ItemRateInput'
import { Button } from '../Button'

type CommentInputProps = {
    submitComment: (d:Comment) => void,
    className?: string,
    productId: number
}

const CommentInput = ({ submitComment, className = '', productId }:CommentInputProps) => {
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState(3)
  const handleSubmit = () => {
    submitComment({
      text: comment,
      rate: rate,
      productId: productId,
      date: '' + new Date()
    }
    )
  }

  const rateHandler = (r:number) => {
    setRate(r)
  }
  const textOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }
  return <div className={`comment-input-component ${className}`}>
        <TextInput label={'Your Comment'} onChange={textOnChange}/>
        <ItemRateInput big withDigits onChange={rateHandler} rating={rate}/>
        <Button buttonText='Submit' onClick={handleSubmit}/>
    </div>
}

export default CommentInput
