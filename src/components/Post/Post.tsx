import media from '@Globals/theme';
import { useGlboalState, useGlobalReducer } from '@Contexts/context';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

function PostUI({ node }) {
  return (
    <Layout>
      <Link to={node.fields.slug}>
        {node.featuredImg.childImageSharp.fixed !== null && (
          <Img className='img' fluid={node.featuredImg?.childImageSharp.fluid} />
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
  const datas = useStaticQuery(graphql`
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
  const post = datas.allMarkdownRemark.edges;
  const { NowCategory, NowTag, allPost } = useGlboalState();
  const dispatch = useGlobalReducer();

  useEffect(() => {
    const array = [];
    post.map((nodes) => {
      const { node } = nodes;
      array.push(node);
    });
    dispatch({ type: 'SET_POST', payload: array });
  }, []);

  useEffect(() => {
    const array = [];
    if (NowCategory === 'All') {
      if (NowTag.length !== 0) {
        post.map((nodes) => {
          const { node } = nodes;
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            array.push(node);
          }
        });
        dispatch({ type: 'SET_POST', payload: array });
        return;
      }
      post.map((nodes) => {
        const { node } = nodes;
        array.push(node);
      });
      dispatch({ type: 'SET_POST', payload: array });
    } else {
      if (NowTag.length !== 0) {
        post.map((nodes) => {
          const { node } = nodes;
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            array.push(node);
          }
        });
        dispatch({ type: 'SET_POST', payload: array });
        return;
      }

      post.map((nodes) => {
        const { node } = nodes;
        if (NowCategory === node.frontmatter.category) {
          array.push(node);
        }
      });
      dispatch({ type: 'SET_POST', payload: array });
    }
  }, [NowCategory, NowTag]);

  if (allPost.length === 0) {
    return (
      <>
        {post.map((nodes: any) => {
          const { node } = nodes;
          return <PostUI key={node.id} node={node} />;
        })}
      </>
    );
  }
  return (
    <>
      {allPost.map((nodes: any) => {
        return <PostUI key={nodes.id} node={nodes} />;
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
    ${media.xs({
      fontSize: '1rem',
      marginTop: '0.5rem',
    })}
  }
`;
