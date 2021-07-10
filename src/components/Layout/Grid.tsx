import React from 'react';
import { media } from '@Globals/theme';
import styled from 'styled-components';

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;

const GridContainer = styled.div`
  display: grid;
  gap: 20px;

  justify-items: center;

  grid-template-columns: repeat(4, 1fr);
  ${media.xxl({
    gridTemplateColumns: 'repeat(3,1fr)'
  })}
  ${media.lg({
    gridTemplateColumns: 'repeat(2,1fr)'
  })}
  ${media.md({
    gridTemplateColumns: 'repeat(1,1fr)'
  })}
`;
