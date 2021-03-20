// このファイルを作成することにより各nodeに対してのslugを作成しgraphQLに表示させる
// 階層
// allMarkdownRemark > edges > node > fields > slug
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    // console.log(createFilePath({ node, getNode, basePath: `pages` }));
    // console.log(createNodeField);
    // const fileNode = getNode(node.parent);
    // console.log(`\n`, fileNode.relativePath)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}