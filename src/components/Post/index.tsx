import { Link, graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';
import { media } from '@Globals/theme';
import styled from 'styled-components';

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            featuredImg {
              childImageSharp {
                fixed(width: 400, height: 200) {
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
              <ImageBox>
                {node.featuredImg.childImageSharp.fixed !== null && (
                  <Img className='img' fixed={node.featuredImg.childImageSharp.fixed} />
                )}
              </ImageBox>
            </Link>
            <TextBox>
              <Link to={node.fields.slug}>
                <h1>{node.frontmatter.title}</h1>
              </Link>
              {node.frontmatter.tags.map((tag) => {
                return <>{tag}</>;
              })}
              <p style={{ position: 'absolute', bottom: 0 }}>{node.frontmatter.date}</p>
            </TextBox>
          </Layout>
        );
      })}
    </>
  );
};

export default index;

const Layout = styled.div`
  ${media.md({
    width: '300px',
    height: '340px',
    padding: 0
  })}
  width: 400px;
  height: 400px;

  border-bottom: 1px solid #dddddd;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  ${media.md({
    width: '300px'
  })}
`;

const TextBox = styled.div`
  margin-top: 10px;
  position: relative;
  height: 150px;
  padding: 1rem;
  font-size: 12px;
  ${media.md({
    height: '90px',
    fontSize: '8px',
    padding: '0 1rem'
  })};
`;
