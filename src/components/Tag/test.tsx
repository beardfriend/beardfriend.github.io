import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Test = ({ state, category }) => {
  const data = useStaticQuery(graphql`
    query ($category: String) {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: $cagegory } } }) {
        group(field: frontmatter___tags) {
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
            featuredImg {
              id
            }
          }
          fieldValue
        }
      }
    }
  `);
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
                  <div>
                    <h1>{frontmatter.title}</h1>
                  </div>
                );
              })}
            </>
          );
        })}
    </>
  );
};
export default Test;
export const query = graphql`
  query ($category: String) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $cagegory } } }) {
      group(field: frontmatter___tags) {
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
          featuredImg {
            id
          }
        }
        fieldValue
      }
    }
  }
`;
