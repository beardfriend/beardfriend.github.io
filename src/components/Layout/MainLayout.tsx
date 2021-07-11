import React, { useEffect, useState } from 'react';

import Header from '@Components/Header';
import { media } from '@Globals/theme';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const add = () => {
      if (window.innerWidth < 768) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener('resize', add);

    if (window.innerWidth < 768) {
      setState(true);
    } else {
      setState(false);
    }
    return () => {
      window.removeEventListener('resize', add);
    };
  }, []);

  return (
    <Flex_Col>
      <Header state={state} />
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
  top: 60px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  max-width: 1000px;
`;
