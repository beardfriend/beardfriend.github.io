import Header from '@Components/Header';
import media from '@Globals/theme';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

const MainLayout: React.FC = function _({ children }) {
  const [state, setState] = useState(false);
  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      setState(true);
    }
    const add = () => {
      if (window.innerWidth < 768) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener('resize', add);
    return () => {
      window.removeEventListener('resize', add);
    };
  }, []);
  return (
    <FlexCol>
      <Header isMobile={state} />
      <Main>{children}</Main>
    </FlexCol>
  );
};

export default MainLayout;

const FlexCol = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  top: 60px;
  padding: 0 20rem;
  padding-top: 2rem;
  ${media.xxl({
    padding: `0 12rem`
  })}
  ${media.xl({
    padding: `0 7rem`
  })}
  ${media.lg({
    padding: `0 6rem`
  })}
  ${media.md({
    padding: `0 4rem`
  })}
  ${media.sm({
    padding: `0 1rem`
  })}

  position: relative;
`;
