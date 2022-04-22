import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar'

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePreview from "../components/imagePreview";

const Image = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      <SEO title="Images" />
      <h1>Images List Material UI</h1>
      <ImageList sx={{ width: 500, height: 450 }}>
        {articles.map(article => (
          <ImageListItem key={article.id}>
            {/* <Link to={article.path.alias}>
              <h2>{article.title}</h2>
            </Link> */}
            <img
              src={`${article.relationships.field_image.localFile.publicURL}?w=248&fit=crop&auto=format`}
              srcSet={`${article.relationships.field_image.localFile.publicURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={article.field_image.alt}
              href={article.path.alias}
              loading="lazy"
            />
            
            <ImageListItemBar
              title={article.title}
              subtitle={<span>by: {article.title}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>


      {/* {articles.map(article => (
        <ImagePreview
          key={article.id}
          title={article.title}
          image={article.relationships.field_image.localFile.publicURL}
          alt={article.field_image.alt}
        />
      ))} */}
    </Layout>
  );
}

Image.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle {
      nodes {
        title
        field_image {
          alt
        }
        relationships {
          field_image {
            localFile {
              publicURL
            }
          }
        }
        path {
          alias
        }
      }
    }
  }
`;

export default Image;
