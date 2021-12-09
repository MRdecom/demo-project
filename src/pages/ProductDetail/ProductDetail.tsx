import React, { useEffect, useMemo, useState } from 'react'
import { ProductImage } from './ProductImage'
import { ProductDetails } from './ProductDetailsBlock'
import { CommentItem, ItemRateInput, TabMenu } from '../../components'
import { useTabs, TabPanel } from 'react-headless-tabs'
import CommentInput from '../../components/CommentInput/CommentInput'
import Button from '../../components/Button/Button'
import { getProductById } from './actions'
import { useHistory, useParams } from 'react-router-dom'
import { pageUrls } from '../../constants/pageUrls'
import { ProductData } from '../../types/ProductData'
import { Comment } from '../../types/CommentItemType'
import { dateFormat } from '../../utils/utils'
import commentStore, { useComment } from '../../store/comment'

const tabList = ['Details', 'Comments and Rates']

const ProductDetail = () => {
  const history = useHistory()
  const { id } = useParams<{id: string}>()
  const [product, setProduct] = useState<ProductData>()
  const comments = useComment(+id)
  const [selectedTab, setSelectedTab] = useTabs(tabList)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [newCommentAreaOpen, setNewCommentAreaOpen] = useState(false)

  const getProduct = () => {
    const resp = getProductById(id)
    if (resp) {
      setProduct(resp)
    } else {
      history.push(pageUrls.list)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  const averageRating = useMemo(() => {
    if (comments.length === 0) return 0
    return comments.reduce((average, comment) => {
      return average + comment.rate
    }, 0) / comments.length
  }, [comments])

  const tabSelectHandler = (index:number) => {
    setSelectedTab(tabList[index])
    setActiveTabIndex(index)
  }

  const newCommentButtonHandler = () => {
    setNewCommentAreaOpen(true)
  }

  const createComment = (data: Comment) => {
    commentStore.addComment(data)
    setNewCommentAreaOpen(false)
  }

  return (
        <>
            {
                product &&
                <div className='product-detail-page'>
                    <div>
                        <ProductImage src={product.image}/>
                        <ItemRateInput big rating={averageRating} withDigits readonly/>
                    </div>

                    <div className='product-detail-tab-container'>
                        <div>
                            <TabMenu tabList={tabList} onClick={tabSelectHandler} activeTabIndex={activeTabIndex}/>
                        </div>
                        <TabPanel hidden={selectedTab !== tabList[0]} className='tab-content'>
                            <ProductDetails
                                arrivalDate={dateFormat(product.arrivalDate)}
                                currency={product.currency}
                                description={product.description}
                                name={product.name}
                                price={+product.price}/>
                        </TabPanel>
                        <TabPanel hidden={selectedTab !== tabList[1]} className='tab-content'>
                            {
                                newCommentAreaOpen
                                  ? <CommentInput productId={+id} submitComment={createComment} />
                                  : <Button onClick={newCommentButtonHandler} buttonText={'New comment'}/>
                            }
                            {
                                comments &&
                                comments.map((com, i) => {
                                  return <CommentItem key={i} commentDate={dateFormat(com.date)} rate={com.rate} text={com.text}/>
                                })
                            }
                        </TabPanel>
                    </div>
                </div>
            }
        </>

  )
}

export default ProductDetail
