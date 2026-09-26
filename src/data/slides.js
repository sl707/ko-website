import {postList} from './posts'
import newspaperList from './newspapers'

// Copy before labelling. These lists share object identity with the post and
// newspaper pages, and `type` there is the category used for filtering.
const labelledPostList = postList.map(p => ({ ...p, type: 'post' }))

const labelledNewspaperList = newspaperList.map(n => ({ ...n, type: 'news' }))

const slideList = labelledPostList.concat(labelledNewspaperList)

const sortedSlideList = slideList.sort((a, b) => {
  const aTime = a.type === 'post' ? a.date.getTime() : a.newsDate.getTime()
  const bTime = b.type === 'post' ? b.date.getTime() : b.newsDate.getTime()
  return bTime - aTime
})

export default sortedSlideList
