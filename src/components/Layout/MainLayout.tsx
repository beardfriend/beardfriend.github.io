import Header from '@Components/Header';
import media from '@Globals/theme';
import sizeByDevice from '@Globals/common';
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
  top: 60px;
  margin: 0 auto;
  width: calc(100% - 2rem);
  max-width: 110rem;
  margin-top: 2rem;

  position: relative;
`;
