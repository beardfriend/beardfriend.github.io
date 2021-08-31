import React from 'react';
import styled from 'styled-components';

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
