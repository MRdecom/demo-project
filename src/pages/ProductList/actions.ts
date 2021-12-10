import { ProductData } from '../../types/ProductData'
import commentStore from '../../store/comment'

export const getProductList = () => {
  const data = localStorage.getItem('products')
  const comments = commentStore.getComments()

  const filterComments = (id:string) => comments.filter(com => com.productId === +id)

  if (data) {
    return JSON.parse(data).map((el:ProductData) => {
      const dataComments = filterComments(el.id)

      const average = dataComments.reduce((average, comment) => {
        return average + comment.rate
      }, 0) / dataComments.length

      return { ...el, averageRate: average || 0 }
    })
  }
  return []
}
