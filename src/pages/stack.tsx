import { graphql, useStaticQuery } from 'gatsby';

import { Badge } from '@chakra-ui/react';
import Img from 'gatsby-image';
import LeftHeader from '@Components/Header/LeftHeader';
import React from 'react';
import styled from 'styled-components';

const Front = ({ data }) => {
  const { edges } = data;
  const regExp = /[0-9.;\-#!@]/gi;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(5,1fr) `, gap: '10px' }}>
      {edges.map((edge) => {
        const { name } = edge.node;

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center'
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
    </div>
  );
};

const Back = ({ data }) => {
  const { edges } = data;
  const regExp = /[0-9.;\-#@!]/gi;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(5,1fr) `, gap: '10px' }}>
      {edges.map((edge) => {
        const { name } = edge.node;

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Img fixed={edge.node.childImageSharp.fixed} alt='name' />

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
    </div>
  );
};

const ETC = ({ data }) => {
  const { edges } = data;
  const regExp = /[0-9.;\-#@!]/gi;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(5,1fr) `, gap: '10px' }}>
      {edges.map((edge) => {
        const { name } = edge.node;

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Img fixed={edge.node.childImageSharp.fixed} alt='name' />

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
    </div>
  );
};

const Stack = () => {
  const data = useStaticQuery(graphql`
    query {
      Front: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/logo/Front" }
        }
      ) {
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

      Back: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/logo/Back" }
        }
      ) {
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

      Etc: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/logo/Etc" }
        }
      ) {
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

  const { edges } = data.Front;
  console.log(edges);
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: `1fr 2fr` }}>
        <LeftHeader />

        <Container>
          <h1>FrontEnd</h1>
          {/* <Img
            fixed={queryData.allFile.edges.map.node.childImageSharp.fixed}
            alt='Gatsby Docs are awesome'
          /> */}

          <Front data={data.Front} />
          <h1>BackEnd</h1>
          <Back data={data.Back} />
          <h1>ETC</h1>
          <ETC data={data.Etc} />
          {/* <img src={queryData.allFile.edges[0].node.childImageSharp.fixed.src} /> */}
        </Container>
      </div>
    </>
  );
};

export default Stack;

export const Container = styled.div`
  padding: 1rem 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
