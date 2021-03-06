import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";
import Navbar from "../components/navbar";

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;
  
  return (
    <Layout>
      <SEO title="Articles" />
      <Navbar/>
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          path={article.path.alias}
          image={article.relationships.field_image.localFile.publicURL}
          alt={article.field_image.alt}
          summary={article.body.summary ? article.body.summary : article.body.processed.substring(0, 300)}
        />
      ))}
    </Layout>
  );
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle (sort:{fields:created, order: DESC}){
        nodes {
          title
          body {
            summary
            processed
          }
          created
          field_image {
            alt
          }
          path {
            alias
          }
          relationships {
            field_image {
              localFile {
                publicURL
              }
            }
          }
        }
    }
  }
`;

export default Articles;
