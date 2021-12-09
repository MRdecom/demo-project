import { ProductData } from '../../types/ProductData'

export const getProductById = (id:string): undefined|ProductData => {
  const resp = localStorage.getItem('products')
  if (resp) {
    return JSON.parse(resp).find((el: { id: string; }) => el.id === id)
  }
}
