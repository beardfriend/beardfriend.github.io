import { graphql, useStaticQuery } from 'gatsby';

import { Badge } from '@chakra-ui/react';
import Img from 'gatsby-image';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import styled from 'styled-components';

const Stack = ({ data }) => {
  const { edges } = data;
  const regExp = /[0-9.;\-#!@]/gi;
  return (
    <GridContainer>
      {edges.map((edge) => {
        const { name } = edge.node;

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Img fixed={edge.node.childImageSharp.fixed} alt='name' />
            {/* <h1>{name.filter(())}</h1> */}
            <div style={{ display: 'flex', gap: '5px' }}>
              <Badge>{name.replace(regExp, '')}</Badge>
              {name.includes('!') && (
                <Badge colorScheme='green' textAlign='center'>
                  상
                </Badge>
              )}
              {name.includes('@') && (
                <Badge textAlign='center' colorScheme='blue'>
                  중
                </Badge>
              )}
              {name.includes('#') && (
                <Badge textAlign='center' colorScheme='red'>
                  하
                </Badge>
              )}
            </div>
          </div>
        );
      })}
    </GridContainer>
  );
};

const Stacks = () => {
  const data = useStaticQuery(graphql`
    query {
      Language: allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { eq: "logo/language" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      Front: allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { eq: "logo/front" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      Back: allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { eq: "logo/back" } }) {
        edges {
          node {
            extension
            dir
            name
            modifiedTime
            childImageSharp {
              id
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      Etc: allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { eq: "logo/etc" } }) {
        edges {
          node {
            extension
            dir
            name
            modifiedTime
            childImageSharp {
              id
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <MainLayout>
        <Container>
          <InnerBox>
            <h1>Language</h1>
            <hr />
            <Stack data={data.Language} />
            <h1>BackEnd</h1>
            <hr />
            <Stack data={data.Back} />
            <h1>FrontEnd</h1>
            <hr />
            <Stack data={data.Front} />
            <h1>ETC</h1>
            <hr />
            <Stack data={data.Etc} />
          </InnerBox>
        </Container>
      </MainLayout>
    </>
  );
};

export default Stacks;

export const Container = styled.div`
  padding: 5rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const InnerBox = styled.div`
  width: 10 0%;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 2rem 0;
  }
  hr {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  padding-bottom: 6rem;
  @media screen and (max-width: 1235px) {
    width: 90%;
    img {
      max-width: 90px;
      max-height: 90px;
    }
  }
`;

// export const MainLayout = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 2fr;

//   @media screen and (max-width: 1235px) {
//     grid-template-rows: 1fr;
//     grid-template-columns: none;
//   }
// `;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media screen and (max-width: 1235px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;
