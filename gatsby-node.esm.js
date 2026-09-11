import alertList from './src/data/alerts'
import {postList} from './src/data/posts'
import newspaperList from './src/data/newspapers'

exports.createPages = ({ actions }) => {
  const { createPage, createRedirect } = actions

  const legacyPostCategories = {
    '/gathering/': '총회/이사회',
    '/jehyang/': '제향',
    '/institute/': '연수원',
    '/otherevents/': '기타',
  }

  Object.entries(legacyPostCategories).forEach(([fromPath, category]) => {
    createRedirect({
      fromPath,
      toPath: `/posts/?category=${encodeURIComponent(category)}`,
      isPermanent: true,
      redirectInBrowser: true,
    })
  })

  alertList.forEach(alert => {
    createPage({
      path: `/alert/${alert.alertId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post: alert, type: '알 림' }
    })
  })
  postList.forEach(post => {
    createPage({
      path: `/post/${post.postId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post, type: '소식 / 자료실' }
    })
  })
  const orderedPapers = [...newspaperList].sort(
    (a, b) => a.newsNumber - b.newsNumber
  )

  orderedPapers.forEach((paper, index) => {
    const toSummary = adjacent =>
      adjacent ? { newsNumber: adjacent.newsNumber } : null

    createPage({
      path: `/newspaper/${paper.newsNumber}/`,
      component: require.resolve('./src/templates/newspaper-page.js'),
      context: {
        paper,
        previousPaper: toSummary(orderedPapers[index - 1]),
        nextPaper: toSummary(orderedPapers[index + 1])
      }
    })
  })
}
