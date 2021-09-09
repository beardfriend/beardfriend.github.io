import { Link, graphql, useStaticQuery } from 'gatsby';

import { Button } from '@chakra-ui/react';
import Img from 'gatsby-image';
import React, { useEffect } from 'react';
import { sizes } from '@Globals/theme';
import styled from 'styled-components';

const index = ({ data, state }) => {
  const tagPost = data.allMarkdownRemark.group;
  const cateogryPost = data.allMarkdownRemark.edges;
  return (
    <>
      {tagPost
        .filter((node) => node.fieldValue === state)
        .map((data) => {
          const { nodes } = data;
          return (
            <>
              {nodes.map((data) => {
                const { frontmatter } = data;
                console.log(frontmatter);
                return (
                  <Layout>
                    <h1>{frontmatter.title}</h1>
                  </Layout>
                );
              })}
            </>
          );
        })}
    </>
  );
};

export default index;

const Layout = styled.div`
  width: 400px;
  height: 400px;

  border-bottom: 1px solid #dddddd;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h1 {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    &:hover,
    :active,
    :visited {
      color: black;
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  margin-top: 10px;
  position: relative;
  height: 150px;
  padding: 1rem;
  font-size: 12px;
`;
