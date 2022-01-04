import media from '@Globals/theme';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

function Post() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            fields {
              slug
            }
            frontmatter {
              tags
              title
              date(formatString: "YYYY.MM.DD")
              subtitle
            }
          }
        }
      }
    }
  `);
  const blogPost = data.allMarkdownRemark.edges;

  return (
    <>
      {blogPost.map((nodes: any) => {
        const { node } = nodes;
        return (
          <Layout key={node.id}>
            <Link to={node.fields.slug}>
              {node.featuredImg.childImageSharp.fixed !== null && (
                <Img className='img' fluid={node.featuredImg.childImageSharp.fluid} />
              )}
            </Link>

            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            {node.frontmatter.tags.map((tag: any) => {
              return <>{tag}</>;
            })}
            <p style={{ position: 'absolute', bottom: 0 }}>{node.frontmatter.date}</p>
          </Layout>
        );
      })}
    </>
  );
}

export default Post;

const Layout = styled.div`
  width: 100%;
  height: 30rem;
  border-bottom: 1px solid #dddddd;

  h1 {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    ${media.md({
      fontSize: '15px'
    })}
  }

  a {
    text-decoration: none;
    &:hover,
    :active,
    :visited {
      color: black;
    }
  }
  .img {
    min-width: 100%;
    min-height: 20rem;
    height: 20rem;
  }
`;
