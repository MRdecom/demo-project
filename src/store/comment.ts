import { map, Subject } from 'rxjs'
import { Comment } from '../types/CommentItemType'
import { useLayoutEffect, useState } from 'react'

type CommentStoreType = Comment[];

const subject = new Subject<CommentStoreType>()

const comments = JSON.parse(localStorage.getItem('commentData') || '[]')

const initialState: CommentStoreType = comments

let state = initialState

const commentStore = {
  init: () => {
    state = [...state]
    subject.next(state)
  },
  subscribe: (setState: (comment:CommentStoreType)=>void) => subject.subscribe(setState),
  addComment: (message: Comment) => {
    state = [...state, message]
    localStorage.setItem('commentData', JSON.stringify(state))
    subject.next(state)
  },
  initialState
}

export const useComment = (productId:number) => {
  const [commentData, setCommentData] = useState<CommentStoreType>(initialState)
  useLayoutEffect(() => {
    const commentSubscription = subject
      .pipe(
        map(comments =>
          comments.filter(
            comment =>
              comment.productId === productId
          )
        )
      )
      .subscribe(setCommentData)
    commentStore.init()
    return () => {
      commentSubscription.unsubscribe()
    }
  }, [])
  return commentData
}

export default commentStore
