import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const Index = ({ data, handleChange }) => {
  return (
    <div>
      {data.allMarkdownRemark.group.map((data) => {
        return (
          <>
            <button onClick={() => handleChange(data.fieldValue)}>
              <h1>{data.fieldValue}</h1>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Index;
