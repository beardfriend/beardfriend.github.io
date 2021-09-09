import Header from '@Components/Header';
import { Layout } from '@Globals/basic';
import { sizes } from '@Globals/theme';
import React from 'react';
import styled from 'styled-components';
import useMobile from '../../hooks/useMobile';

const MainLayout = ({ children }) => {
  const { isMobile } = useMobile();
  return (
    <MainContainer>
      <Header isMobile={isMobile} />
      <Main>{children}</Main>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const { xxl, xl, lg, md, sm } = sizes;

const Main = styled.main`
  flex: 1;
  position: relative;
  top: 6rem;
  padding: 2rem ${Layout.default};
  @media screen and (max-width: ${xxl}) {
    padding: 2rem ${Layout.xxl};
  }
  @media screen and (max-width: ${xl}) {
    padding: 2rem ${Layout.xl};
  }
  @media screen and (max-width: ${lg}) {
    padding: 2rem ${Layout.lg};
  }
  @media screen and (max-width: ${md}) {
    padding: 2rem ${Layout.md};
  }
  @media screen and (max-width: ${sm}) {
    padding: 2rem ${Layout.sm};
  }
`;
