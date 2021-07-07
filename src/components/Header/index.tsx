import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
const index = () => {
  return (
    <NavContainer>
      <Link to='/'></Link>
    </NavContainer>
  );
};

export default index;

const NavContainer = styled.nav`
  display: flex;
  flex: auto;
  justify-content: center;

  .logo {
    height: auto;
    width: 120px;
    margin-top: 5%;
  }
`;
