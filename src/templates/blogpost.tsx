import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  let Image = markdownRemark?.featuredImg?.childImageSharp?.fluid;
  return (
    <MainLayout>
      <TableOfContents dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }} />
      <BlogLayout>
        <Title>
          <h1>{frontmatter.title}</h1>
          <h3 style={{ fontStyle: 'italic' }}>{frontmatter.date}</h3>
          {Image !== null && <Img fluid={Image} />}
          <hr />
        </Title>
        <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
      </BlogLayout>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
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
const BlogContainer = styled.div`
  display: flex;
`;
const TableOfContents = styled.div`
  /* ${media.md({
    display: 'none',
  })} */
  ul li {
    list-style: none;
  }
  position: fixed;
  top: 0;

  padding-top: 100px;
  padding-left: 10px;
  width: 300px;
  height: 100vh;

  overflow-y: scroll;
  padding-right: 20px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;

  ul > li {
    padding-left: 15px;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }
  ul > li > p {
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }
`;

const BlogLayout = styled.div`
  margin-left: 300px;

  /* ${media.lg({
    width: '600px',
  })}
  ${media.md({
    marginLeft: 0,
    width: '560px',
  })}
  ${media.sm({
    width: '90%',
  })}
  ${media.xs({
    width: '90%',
  })} */
  .html {
    width: 90%;
    /* ${media.md({
      width: '100%',
    })} */

    p {
      /* ${media.sm({
        padding: `0.5rem`,
      })} */
      padding: 0.5rem 0;
    }

    h1,
    h2,
    h3 {
      margin: -50px 0px 1.2rem 0px;
      padding-top: 70px;
    }

    hr {
      margin: 1.2rem 0;
    }

    ol {
      ${media.sm({
        padding: `0.5rem`,
        marginLeft: '1rem',
      })}
      padding: 0.5rem 1rem;
    }
    li {
      padding: 0.5rem 0;
    }
    a {
      svg {
        visibility: hidden;
      }
    }
  }

  /* pre {
    ${media.sm({
    fontSize: '10px',
  })}
    font-size: 13px;
  }
  p {
    ${media.sm({
    fontSize: '12px',
  })}
    font-size: 13px;
  }
  h1 {
    ${media.sm({
    fontSize: '20px',
  })}
    font-size: 30px;
    font-weight: 700;
  }
  h2 {
    ${media.sm({
    fontSize: '18px',
  })}
    font-size: 26px;
    font-weight: 700;
  }
  h3 {
    ${media.sm({
    fontSize: '16px',
  })}
    font-size: 23px;
    font-weight: 700;
  }
  ol {
    ${media.sm({
    fontSize: '12px',
  })}
    font-size: 13px;
    font-weight: bold;
  } */
  img,
  video {
    margin: 0 auto;
  }
`;

const ImageBox = styled.div`
  /* width: 800px;
  display: flex;
  justify-content: center;
  ${media.lg({
    width: '600px',
  })}
  ${media.md({
    width: '560px',
  })}
  ${media.sm({
    width: '450px',
  })}
  ${media.sm({
    width: '300px',
    height: '200px',
  })} */
`;

const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;

  flex-direction: column;
  gap: 20px;
  justify-content: center;
  /* h1 {
    font-size: 40px;
    ${media.md({
    fontSize: '30px',
  })}
    ${media.sm({
    fontSize: '25px',
  })}
  } */
`;
