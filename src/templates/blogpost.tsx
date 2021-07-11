import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import { graphql } from 'gatsby';
import { media } from '@Globals/theme';
import styled from 'styled-components';
export default function Template({
  data // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  let Image = markdownRemark?.featuredImg?.childImageSharp?.fluid;
  return (
    <MainLayout>
      <BlogLayout>
        <Title>
          <h1>{frontmatter.title}</h1>
          {Image !== null && <Img fluid={Image} />}
          <hr />
        </Title>

        <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
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
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
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
  width: 800px;
  margin: 0 auto;
  ${media.lg({
    width: '600px'
  })}
  ${media.md({
    width: '560px'
  })}
  ${media.sm({
    width: '90%'
  })}
  ${media.xs({
    width: '90%'
  })}
  .html {
    width: 90%;
    ${media.md({
      width: '100%'
    })}
    margin: 0 auto;
    p,
    h1,
    h2,
    h3 {
      ${media.sm({
        padding: `0.5rem`
      })}
      padding: 0.5rem 0;
    }
    ol {
      ${media.sm({
        padding: `0.5rem`,
        marginLeft: '1rem'
      })}
      padding: 0.5rem 1rem;
    }
  }
  pre {
    ${media.sm({
      fontSize: '10px'
    })}
    font-size: 13px;
  }
  p {
    ${media.sm({
      fontSize: '12px'
    })}
    font-size: 13px;
  }
  h1 {
    ${media.sm({
      fontSize: '20px'
    })}
    font-size: 30px;
    font-weight: 700;
  }
  h2 {
    ${media.sm({
      fontSize: '18px'
    })}
    font-size: 26px;
    font-weight: 700;
  }
  h3 {
    ${media.sm({
      fontSize: '16px'
    })}
    font-size: 23px;
    font-weight: 700;
  }
  ol {
    ${media.sm({
      fontSize: '12px'
    })}
    font-size: 13px;
    font-weight: bold;
  }
`;

const ImageBox = styled.div`
  /* width: 800px;
  display: flex;
  justify-content: center;
  ${media.lg({
    width: '600px'
  })}
  ${media.md({
    width: '560px'
  })}
  ${media.sm({
    width: '450px'
  })}
  ${media.sm({
    width: '300px',
    height: '200px'
  })} */
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  h1 {
    font-size: 40px;
    ${media.md({
      fontSize: '30px'
    })}
    ${media.sm({
      fontSize: '25px'
    })}
  }
`;