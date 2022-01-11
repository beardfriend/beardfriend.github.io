import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { useGlobalReducer } from '@Contexts/context';
import media from '@Globals/theme';
import styled from 'styled-components';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const Image = markdownRemark?.featuredImg?.childImageSharp?.fluid;
  const dispatch = useGlobalReducer();
  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: frontmatter.title });
  }, []);

  return (
    <MainLayout>
      <BlogLayout>
        <Title>
          <h1>{frontmatter.title}</h1>
          <h3 style={{ fontStyle: 'italic' }}>{frontmatter.date}</h3>
          {Image !== null && <Img fluid={Image} />}
          <hr />
        </Title>
        <hr></hr>
        <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
      </BlogLayout>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
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
  img {
    width: 100%;
  }
  ${media.lg({
    width: '600px',
  })}
  ${media.md({
    width: '560px',
  })}
  ${media.sm({
    width: '90%',
  })}
  ${media.xs({
    width: '95%',
  })}
  .html {
    width: 90%;
    ${media.md({
      width: '100%',
    })}
    margin: 0 auto;
    p {
      ${media.sm({
        padding: `0.5rem`,
      })}
      padding: 0.5rem 0;
    }
    hr,
    h1,
    h2,
    h3 {
      margin: 2rem 0;
    }

    ol {
      ${media.sm({
        padding: `0.5rem`,
        marginLeft: '1rem',
      })}
      padding: 0.5rem 1rem;
    }
    li {
      font-size: 13px;
      padding: 0.5rem 0;
    }
  }
  pre {
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
  strong {
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
  }
  img,
  video {
    margin: 0 auto;
  }
  margin-bottom: 10rem;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;

  flex-direction: column;
  gap: 20px;
  justify-content: center;
  h1 {
    font-size: 40px;
    ${media.md({
      fontSize: '30px',
    })}
    ${media.sm({
      fontSize: '25px',
    })}
  }
`;
