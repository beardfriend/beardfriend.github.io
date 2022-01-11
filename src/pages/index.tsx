import React, { useEffect } from 'react';
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
            frontmatter {
              tags
              category
            }
          }
        }
      }
    }
  `);
  const asddd = datas.allMarkdownRemark.edges;
  const dispatch = useGlobalReducer();
  const { isMobile } = useGlboalState();
  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: '' });
  }, []);

  return (
    <MainLayout>
      <CategoryList data={asddd} />
      <MainContainer isMobile={isMobile}>
        <PostContainer isMobile={isMobile}>
          <Post />
        </PostContainer>
        {!isMobile && (
          <div style={{ marginRight: 0, width: '20rem' }}>
            <TagList data={asddd} isMobile={isMobile} />
          </div>
        )}
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
