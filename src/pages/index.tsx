import React from 'react';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/Post';
import TagList from '@Components/TagList/TagList';

import CategoryList from '@Components/Category/CategoryList';
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
  return (
    <MainLayout>
      <div style={{ display: 'flex', gap: '5rem', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5rem',
            width: 'calc(100% - 25rem)'
          }}
        >
          <Post />
          <CategoryList data={asddd} />
          <TagList data={asddd} />
        </div>
        <div style={{ width: '20rem', height: '60rem', background: 'red' }} />
      </div>
    </MainLayout>
  );
}

export default Index;
