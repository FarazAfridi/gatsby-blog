const path = require("path")
exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const response = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
    }
    `)
    const posts =   response.data.allContentfulBlogPost.edges;
    posts.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: path.resolve('./src/templates/blog-post.tsx'),
            context:  {
                slug: edge.node.slug,
              },
        })
    })
}