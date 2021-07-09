import React from 'react';
import styled from 'styled-components';
const Hamburger = () => {
  return (
    <HamburgerContainer>
      <div />
      <div />
      <div />
    </HamburgerContainer>
  );
};

export default Hamburger;

const HamburgerContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    width: 50px;
    height: 3px;

    background-color: white;
  }
`;
