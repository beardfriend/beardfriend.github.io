import media from '@Globals/theme';
import { useGlboalState } from '@Contexts/context';

import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState, useEffect } from 'react';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import styled from 'styled-components';

const Spinner = styled.div<{ isLoading }>`
  border-radius: 50%;
  width: 10em;
  height: 10em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  margin: 0 auto;
  font-size: 6px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

function PostUI({ node, setRef }) {
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
      <div ref={setRef} />
    </Layout>
  );
}

function Post() {
  const { NowCategory, NowTag } = useGlboalState();
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [ref, setRef] = useInfiniteScroll(() => {
    loadMorePost();
  });

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
  async function loadMorePost() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setCount((num) => {
      if (num <= blogPost.length) return num + 2;
      return num;
    });
    setLoading(false);
  }
  if (NowCategory === 'All') {
    if (NowTag.length === 0) {
      return (
        <>
          {blogPost.slice(0, count).map((nodes: any) => {
            const { node } = nodes;
            return (
              <>
                <PostUI key={node.id} node={node} setRef={setRef} />
              </>
            );
          })}
          {blogPost.length < count ? (
            <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
              <h1 style={{ fontSize: '2rem' }}>END</h1>
            </div>
          ) : (
            <Spinner isLoading={loading} />
          )}
        </>
      );
    }
    return (
      <>
        {blogPost.slice(0, count).map((nodes: any) => {
          const { node } = nodes;
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            return (
              <>
                {blogPost.slice(0, count).map((nodes: any) => {
                  const { node } = nodes;
                  return (
                    <>
                      <PostUI key={node.id} node={node} setRef={setRef} />
                    </>
                  );
                })}
                {blogPost.length < count ? (
                  <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
                    <h1 style={{ fontSize: '2rem' }}>END</h1>
                  </div>
                ) : (
                  <Spinner isLoading={loading} />
                )}
              </>
            );
          }
        })}
      </>
    );
  }
  if (NowTag.length === 0) {
    return (
      <>
        {blogPost.slice(0, count).map((nodes: any) => {
          const { node } = nodes;
          if (node.frontmatter.category === NowCategory) {
            return (
              <>
                {blogPost.slice(0, count).map((nodes: any) => {
                  const { node } = nodes;
                  return (
                    <>
                      <PostUI key={node.id} node={node} setRef={setRef} />
                    </>
                  );
                })}
                {blogPost.length < count ? (
                  <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
                    <h1 style={{ fontSize: '2rem' }}>END</h1>
                  </div>
                ) : (
                  <Spinner isLoading={loading} />
                )}
              </>
            );
          }
        })}
      </>
    );
  }
  return (
    <>
      {blogPost.slice(0, count).map((nodes: any) => {
        const { node } = nodes;
        if (node.frontmatter.category === NowCategory) {
          if (NowTag.filter((tag) => node.frontmatter.tags?.includes(tag)).length > 0) {
            return (
              <>
                {blogPost.slice(0, count).map((nodes: any) => {
                  const { node } = nodes;
                  return (
                    <>
                      <PostUI key={node.id} node={node} setRef={setRef} />
                    </>
                  );
                })}
                {blogPost.length < count ? (
                  <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
                    <h1 style={{ fontSize: '2rem' }}>END</h1>
                  </div>
                ) : (
                  <Spinner isLoading={loading} />
                )}
              </>
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
