import postList from './posts'
import newspaperList from './newspapers'

const labelledPostList = postList.map(p => {
  p.type = 'post'
  return p
})

const labelledNewspaperList = newspaperList.map(n => {
  n.type = 'news'
  return n
})

const slideList = labelledPostList.concat(labelledNewspaperList)

const sortedSlideList = slideList.sort((a, b) => {
  const aTime = a.type === 'post' ? a.date.getTime() : a.newsDate.getTime()
  const bTime = b.type === 'post' ? b.date.getTime() : b.newsDate.getTime()
  return bTime - aTime
})

export default sortedSlideList
