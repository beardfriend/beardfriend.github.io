import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/Post';
import TagList from '@Components/TagList/TagList';
import CategoryList from '@Components/Category/CategoryList';
import { useGlboalState, useGlobalReducer } from '@Contexts/context';
import { graphql, useStaticQuery } from 'gatsby';

function Index() {
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
  const asddd = datas.allMarkdownRemark.edges;
  const { isMobile, allPost } = useGlboalState();
  const dispatch = useGlobalReducer();
  useLayoutEffect(() => {}, []);
  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: '' });
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width'></meta>
        <meta name='google-site-verification' content='udSyTzyvdORnQg9JYBJqNxUAZ-hvai2vuUSvQ4M4b3Y' />
        <title>수염난친구블로그 : Home</title>
        <meta name='description' content='수염난친구 블로그입니다.'></meta>
        <meta name='keywords' content='메인페이지'></meta>
        <meta name='og:title' content='수염난친구블로그 : Home'></meta>
        <meta name='og:site_name' content='수염난친구블로그'></meta>
        <meta name='twitter:title' content='수염난친구 블로그'></meta>
        <meta name='twitter:description' content='수염난친구 블로그'></meta>
        <meta name='twitter:card' content='summary'></meta>
      </Helmet>
      <CategoryList data={asddd} />
      <MainContainer isMobile={isMobile}>
        <PostContainer isMobile={isMobile}>
          <Post />
        </PostContainer>

        <TagList data={asddd} isMobile={isMobile} />
      </MainContainer>
    </MainLayout>
  );
}

export default Index;

const MainContainer = styled.div<{ isMobile }>`
  ${({ isMobile }) => {
    if (!isMobile)
      return css`
        display: flex;
        gap: 5rem;
        position: relative;
        margin-top: 5rem;
      `;
  }}
`;

const PostContainer = styled.div<{ isMobile }>`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  ${({ isMobile }) => {
    if (!isMobile) {
      return css`
        width: calc(100% - 25rem);
      `;
    }
    return css`
      margin-top: 5rem;
    `;
  }}
`;
