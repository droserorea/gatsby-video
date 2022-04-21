const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
  const  articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  // console.log('test');
  // console.log(articles.articleData);
  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`./src/templates/article.js`),
      context:{
        ArticleId: articleData.id,
      },
      defer: true,
    })
  );
}
