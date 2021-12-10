export const dateFormat = (date:string):string => {
  const currentDate = new Date(date)
  return (
    ((currentDate.getMonth() > 8) ? (currentDate.getMonth() + 1) : ('0' + (currentDate.getMonth() + 1))) +
        '.' + ((currentDate.getDate() > 9) ? currentDate.getDate() : ('0' + currentDate.getDate())) +
        '.' + currentDate.getFullYear()
  )
}

export const parseJwt = (token:string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}
