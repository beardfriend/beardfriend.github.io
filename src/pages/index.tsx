import React, { useRef, useState } from 'react';

import Grid from '@Components/Layout/Grid';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/index';
import Tag from '@Components/Tag';
import { graphql, useStaticQuery } from 'gatsby';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___category) {
          nodes {
            frontmatter {
              tags
              category
              title
            }
            id
            fields {
              slug
            }
          }
          fieldValue
        }
      }
    }
  `);
  const [category, setCategory] = useState('ALL');
  return (
    <MainLayout>
      <Grid>
        {/* <h1>{data.allMarkdownRemark.group[0].nodes[0].frontmatter.title}</h1> */}
        <Post data={data} state={category} />
        <Tag data={data} handleChange={setCategory} />
      </Grid>
    </MainLayout>
  );
};

export default Index;
