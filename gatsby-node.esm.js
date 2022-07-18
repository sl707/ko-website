import alertList from './src/data/alerts'
import postList from './src/data/posts'

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  alertList.forEach(alert => {
    createPage({
      path: `/alert/${alert.alertId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post: alert }
    })
  })
  postList.forEach(post => {
    createPage({
      path: `/post/${post.postId}/`,
      component: require.resolve('./src/templates/standard-post.js'),
      context: { post }
    })
  })
}
