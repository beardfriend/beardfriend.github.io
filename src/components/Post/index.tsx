import { Link, graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            featuredImg {
              childImageSharp {
                fixed(width: 460) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            fields {
              slug
            }
            frontmatter {
              tags
              title
              date(fromNow: true)
              subtitle
            }
          }
        }
      }
    }
  `);
  const blogPost = data.allMarkdownRemark.edges;

  let Image = blogPost?.node?.frontmatter?.featuredImg?.childImageSharp?.fluid;
  return (
    <>
      {blogPost.map((nodes: any) => {
        const { node } = nodes;
        return (
          <Layout>
            <Link to={node.fields.slug}>
              <ImageBox>
                {Image !== null && (
                  <Img className='img' fixed={node?.featuredImg?.childImageSharp?.fixed} />
                )}
              </ImageBox>
              <h1>{node.frontmatter.title}</h1>

              <p>{node.frontmatter.date}</p>
            </Link>
          </Layout>
        );
      })}
    </>
  );
};

export default index;

const Layout = styled.div`
  width: 500px;
  height: 400px;

  border-bottom: 1px solid #dddddd;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h1 {
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    &:hover,
    :active,
    :visited {
      color: black;
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
