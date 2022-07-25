import alertList from './src/data/alerts'
import postList from './src/data/posts'
import newspaperList from './src/data/newspapers'

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  alertList.forEach(alert => {
    createPage({
      path: `/alert/${alert.alertId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post: alert, type: '알림' }
    })
  })
  postList.forEach(post => {
    createPage({
      path: `/post/${post.postId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post, type: '소식/자료실' }
    })
  })
  newspaperList.forEach(paper => {
    createPage({
      path: `/newspaper/${paper.newsNumber}/`,
      component: require.resolve('./src/templates/newspaper-page.js'),
      context: { paper }
    })
  })
}
