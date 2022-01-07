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
      <CategoryList data={asddd} />
      <div style={{ display: 'flex', gap: '5rem', position: 'relative', marginTop: '5rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5rem',
            width: 'calc(100% - 25rem)',
          }}
        >
          <Post />
        </div>
        <div style={{ marginRight: 0, width: '20rem' }}>
          <TagList data={asddd} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Index;
