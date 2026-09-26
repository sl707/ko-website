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

  const legacyMemberPages = {
    '/centralmembers/': '중앙종문회',
    '/scholarshipmembers/': '중앙종문장학회',
    '/provincemembers/': '지방종문회',
  }

  Object.entries(legacyMemberPages).forEach(([fromPath, group]) => {
    createRedirect({
      fromPath,
      toPath: `/members/?group=${encodeURIComponent(group)}`,
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
  const orderedPosts = [...postList].sort((a, b) => {
    const byDate = a.date.getTime() - b.date.getTime()
    return byDate || a.postId - b.postId
  })

  orderedPosts.forEach((post, index) => {
    const summarize = item =>
      item ? { postId: item.postId, title: item.title } : null

    createPage({
      path: `/post/${post.postId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: {
        post,
        type: '소식 / 자료실',
        previousPost: summarize(orderedPosts[index - 1]),
        nextPost: summarize(orderedPosts[index + 1]),
      }
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
