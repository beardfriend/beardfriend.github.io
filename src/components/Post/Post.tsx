import media from '@Globals/theme';
import { useGlboalState } from '@Contexts/context';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

function PostUI({ node }) {
  return (
    <Layout>
      <Link to={node.fields.slug}>
        {node.featuredImg.childImageSharp.fixed !== null && (
          <Img className='img' fluid={node.featuredImg.childImageSharp.fluid} />
        )}
      </Link>

      <Link to={node.fields.slug}>
        <h1 className='title'>{node.frontmatter.title}</h1>
      </Link>
      <p className='subtitle'>{node.frontmatter.subtitle}</p>
      <div className='tagContainer'>
        {node.frontmatter.tags?.map((tag: any) => {
          return <h2 key={tag.id}>#{tag}</h2>;
        })}
      </div>

      <p style={{ position: 'absolute', bottom: '2rem' }}>{node.frontmatter.date}</p>
    </Layout>
  );
}

function Post() {
  const { NowCategory, NowTag } = useGlboalState();
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

  if (NowCategory === 'All') {
    if (NowTag.length === 0) {
      return (
        <>
          {blogPost.map((nodes: any) => {
            const { node } = nodes;
            return <PostUI key={node.id} node={node} />;
          })}
        </>
      );
    }
    return (
      <>
        {blogPost.map((nodes: any) => {
          const { node } = nodes;
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            return <PostUI key={node.id} node={node} />;
          }
        })}
      </>
    );
  }
  if (NowTag.length === 0) {
    return (
      <>
        {blogPost.map((nodes: any) => {
          const { node } = nodes;
          if (node.frontmatter.category === NowCategory) {
            return <PostUI key={node.id} node={node} />;
          }
        })}
      </>
    );
  }
  return (
    <>
      {blogPost.map((nodes: any) => {
        const { node } = nodes;
        if (node.frontmatter.category === NowCategory) {
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            return <PostUI key={node.id} node={node} />;
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
  max-width: 850px;
  height: 55rem;
  ${media.xs({
    height: '30rem',
  })}
  border-bottom: 1px solid #dddddd;
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
    ${media.xs({
      minHeight: '20rem',
      height: '20rem',
    })}
  }
  .title {
    cursor: pointer;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
    ${media.md({
      fontSize: '15px',
    })}
  }
  .tagContainer {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  .subtitle {
    position: absolute;
    right: 0;
    font-size: 1.5rem;
    text-align: right;
  }
`;
