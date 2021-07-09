import Header from '@Components/Header';
import React from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <Flex_Col>
      <Header />
      <Main>{children}</Main>
    </Flex_Col>
  );
};

export default MainLayout;

const Flex_Col = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  position: relative;
`;
