export const formatDate = (dateString, style = 'default') => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  switch (style) {
    case 'matches':
      return `${day}.${month}. ${hours}:${minutes}`
    case 'news':
      return `${day}.${month}.${year}`
    case 'notifications':
      return `${day}.${month}.${year} ${hours}:${minutes}`

    default:
      return `${day}.${month}.${year} ${hours}:${minutes}`
  }
}
