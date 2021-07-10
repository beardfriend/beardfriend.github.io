import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  let Image = markdownRemark?.featuredImg?.childImageSharp?.fixed;
  return (
    <MainLayout>
      <BlogLayout>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {Image !== null && <Img fixed={Image} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogLayout>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      featuredImg {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")

        title
      }
    }
  }
`;

const BlogLayout = styled.div`
  width: 100%;
  pre {
    font-size: 13px;
  }
  p {
    font-size: 15px;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  h2 {
    font-size: 26px;
    font-weight: 700;
  }
  h3 {
    font-size: 23px;
    font-weight: 700;
  }
`;
