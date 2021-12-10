import React from 'react'
import CommentInput from '../../../components/CommentInput/CommentInput'
import Button from '../../../components/Button/Button'
import { CommentItem } from '../../../components'
import { dateFormat } from '../../../utils/utils'
import { Comment } from '../../../types/CommentItemType'

type CommentAndRateBlockProps = {
    newCommentAreaOpen: boolean,
    productId: string,
    createComment: (data: Comment)=>void,
    newCommentButtonHandler: ()=>void,
    comments: Array<any>
}

const CommentAndRateBlock = (
  {
    newCommentAreaOpen = true,
    productId,
    createComment,
    newCommentButtonHandler,
    comments
  }:CommentAndRateBlockProps) => {
  return (
        <div>
            {
                newCommentAreaOpen
                  ? <CommentInput productId={+productId} submitComment={createComment} />
                  : <Button onClick={newCommentButtonHandler} buttonText={'New comment'}/>
            }
            {
                comments &&
                comments.map((com, i) => {
                  return <CommentItem key={i} commentDate={dateFormat(com.date)} rate={com.rate} text={com.text}/>
                })
            }
        </div>
  )
}

export default CommentAndRateBlock
