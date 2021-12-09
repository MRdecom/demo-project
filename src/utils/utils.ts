export const dateFormat = (date:string):string => {
  const currentDate = new Date(date)
  return (
    ((currentDate.getMonth() > 8) ? (currentDate.getMonth() + 1) : ('0' + (currentDate.getMonth() + 1))) +
        '.' + ((currentDate.getDate() > 9) ? currentDate.getDate() : ('0' + currentDate.getDate())) +
        '.' + currentDate.getFullYear()
  )
}
