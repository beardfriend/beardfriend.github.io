import { Link, graphql, useStaticQuery } from 'gatsby';

import { Button } from '@chakra-ui/react';
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

  return (
    <>
      {blogPost.map((nodes: any) => {
        const { node } = nodes;
        console.log(node.frontmatter.tags);
        console.log(node.featuredImg.childImageSharp.fixed);
        return (
          <Layout>
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
                return (
                  <>
                    <Button mr={1} mt={3}>
                      {tag}
                    </Button>
                  </>
                );
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
  width: 500px;
  height: 500px;
  padding: 1rem;
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
`;

const TextBox = styled.div`
  margin-top: 10px;
  position: relative;
  height: 200px;
`;
