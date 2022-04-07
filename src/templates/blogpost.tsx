import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useGlboalState, useGlobalReducer } from '@Contexts/context';
import media from '@Globals/theme';
import styled from 'styled-components';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark;
  const Image = markdownRemark?.featuredImg?.childImageSharp?.fluid;
  const dispatch = useGlobalReducer();
  const { isMobile } = useGlboalState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: frontmatter.title });
  }, []);
  return (
    <MainLayout>
      {isMobile ? (
        <>
          <TocButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            목차
          </TocButton>
          {isOpen && (
            <MobileTocContainer>
              <h1 style={{ fontSize: '2rem', margin: `0 auto`, marginBottom: '1rem' }}>목차</h1>
              {headings.map((data) => {
                return (
                  <div
                    style={{ marginTop: '1rem', overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                  >
                    <TocList depth={data.depth} href={`#${data.id}`}>
                      {data.value}
                    </TocList>
                  </div>
                );
              })}
            </MobileTocContainer>
          )}
        </>
      ) : (
        headings.length !== 0 && (
          <TocContainer>
            <h1 style={{ fontSize: '2rem', width: '100%', textAlign: 'center', marginBottom: '1rem' }}>목차</h1>
            {headings.map((data) => {
              return (
                <div style={{ marginTop: '1rem', overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  <TocList depth={data.depth} href={`#${data.id}`}>
                    {data.value.includes('<center>')
                      ? data.value.replace('<center>', '').replace('</center>', '')
                      : data.value}
                  </TocList>
                </div>
              );
            })}
          </TocContainer>
        )
      )}

      <BlogLayout>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width'></meta>
          <title>{frontmatter.title} by 수염난친구</title>
          <meta name='description' content={frontmatter.subtitle}></meta>
          <meta name='og:title' content={`${frontmatter.title} by 수염난친구`}></meta>
          <meta name='og:site_name' content='수염난친구블로그'></meta>
          <meta name='twitter:title' content={`${frontmatter.title} by 수염난친구`}></meta>
          <meta name='twitter:description' content={frontmatter.subtitle}></meta>
          <meta name='twitter:card' content='summary'></meta>
        </Helmet>
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
        subtitle
        title
      }
      headings {
        depth
        id
        value
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
        padding: `0.5rem 0`,
      })}
      padding: 0.5rem 0;
    }
    svg {
      display: none;
    }
    h1 {
      z-index: -1;
    }
    h2,
    h3 {
      z-index: -2;
    }
    h1,
    h2,
    h3 {
      margin-top: -4rem;

      padding-top: 6rem;
      position: relative;
      /* padding-top: 6rem;
      height: 6rem;
      top: -6rem; */
    }

    center {
      ${media.sm({
        fontSize: `1.5rem`,
      })}
      font-size: 3rem;
      font-weight: bold;
      margin: 2rem 0;
    }
    hr {
      margin: 2rem 0;
    }
    a.custom-class {
    }
    ol {
      ${media.sm({
        padding: `0.5rem`,
        marginLeft: '1rem',
      })}
      padding: 0.5rem 1rem;
    }
    li {
      ${media.sm({
        fontSize: '13px',
      })}
      font-size: 16px;
      padding: 0.5rem 0;
    }
  }
  pre {
    code,
    span {
      ${media.sm({
        fontSize: '11.5px',
      })}
      font-size: 13px;
    }
    ${media.sm({
      fontSize: '10px',
    })}
    font-size: 13px;
  }
  p {
    ${media.sm({
      fontSize: '13px',
    })}
    font-size: 16px;
  }
  a {
    ${media.sm({
      fontSize: '13px',
    })}
    font-size: 16px;
  }
  strong {
    ${media.sm({
      fontSize: '13px',
    })}
    font-size: 16px;
  }
  h1 {
    ${media.sm({
      fontSize: '20px',
    })}
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h2 {
    ${media.sm({
      fontSize: '18px',
    })}
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h3 {
    ${media.sm({
      fontSize: '16px',
    })}
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 1rem;
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
    margin: 2rem auto;
  }
  margin-bottom: 10rem;
  blockquote {
    box-sizing: border-box;

    margin: 20px 50px 20px 50px;
    padding: 10px 20px 10px 50px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 1px 1px 1px #ccc;
    font-style: italic;

    p {
      font-size: 1.2rem;
    }
  }
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

const MobileTocContainer = styled.div`
  overflow-y: scroll;
  width: 70%;
  height: 40rem;
  position: fixed;
  padding: 4rem 1.5rem;
  bottom: 6rem;
  margin: 0 auto;
  z-index: 99;
  background: white;
  border: 1px solid gray;
`;

const TocContainer = styled.div`
  @media screen and (max-width: 1400px) {
    display: none;
  }
  position: fixed;
  top: 10rem;
  left: 2rem;
  width: 20rem;
  min-height: 50vh;
  max-height: 70vh;
  overflow-y: scroll;
  border: 1px solid gray;
  padding: 4rem 2rem;
  border-radius: 2rem;
`;

const TocList = styled.a<{ depth }>`

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  margin-left: ${({ depth }) => (depth === 2 ? '1rem' : depth === 3 ? '2rem' : 0)};


  z-index:999;
  @media screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: blue;
    }
  }
  
  }
`;

const Container = styled.div`
  display: flex;
`;

const TocButton = styled.button<{ isOpen }>`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 5rem;
  height: 3rem;
  border-radius: 5rem;
  background: ${({ isOpen }) => (isOpen ? 'black' : 'gray')};
  color: white;
  font-weight: bold;
  z-index: 999;
`;
