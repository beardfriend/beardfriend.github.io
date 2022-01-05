import media from '@Globals/theme';
import { useGlobalContext } from '../../Context/context';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

function Post() {
  const { categoryList, tagList, nowCategory, nowTag } = useGlobalContext();
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
              category
              date(formatString: "YYYY.MM.DD")
              subtitle
            }
          }
        }
      }
    }
  `);
  const blogPost = data.allMarkdownRemark.edges;
  if (nowCategory === 'ALL') {
    if (nowTag.length === 0) {
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
                  return <h2 key={tag.id}>{tag}</h2>;
                })}
                <p style={{ position: 'absolute', bottom: '2rem' }}>{node.frontmatter.date}</p>
              </Layout>
            );
          })}
        </>
      );
    }
    return (
      <>
        {blogPost.map((nodes: any) => {
          const { node } = nodes;
          console.log(node.frontmatter.tags.filter((tag) => nowTag.includes(tag)));
          if (nowTag.filter((tag) => node.frontmatter.tags.includes(tag)).length > 0) {
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
                  return <h2 key={tag.id}>{tag}</h2>;
                })}
                <p style={{ position: 'absolute', bottom: '2rem' }}>{node.frontmatter.date}</p>
              </Layout>
            );
          }
        })}
      </>
    );
  }
  return (
    <>
      {blogPost.map((nodes: any) => {
        const { node } = nodes;
        if (node.frontmatter.category === nowCategory) {
          const filtered = nowTag.filter((tagg) => tagg.includes(node.frontmatter.tags));
          console.log(filtered);
          if (filtered) {
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
                  return <h2 key={tag.id}>{tag}</h2>;
                })}
                <p style={{ position: 'absolute', bottom: '2rem' }}>{node.frontmatter.date}</p>
              </Layout>
            );
          }
        }
      })}
    </>
  );
}

export default Post;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 55rem;
  border-bottom: 1px solid #dddddd;

  h1 {
    cursor: pointer;
    font-size: 3.2rem;
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
    min-height: 40rem;
    height: 40rem;
  }
`;
