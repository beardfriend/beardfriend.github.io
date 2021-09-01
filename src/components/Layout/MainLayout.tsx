import React, { useLayoutEffect, useState } from 'react';

import Header from '@Components/Header';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  const [state, setState] = useState<boolean>(false);
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
    <Flex_Col>
      <Header isMobile={state} />
      <Main>{children}</Main>
    </Flex_Col>
  );
};

export default MainLayout;

const Flex_Col = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  top: 60px;
  padding: 2rem 20rem;

  position: relative;
`;
