import Header from '@Components/Header';
import React, { useLayoutEffect } from 'react';
import { useGlboalState, useGlobalReducer } from '@Contexts/context';
import styled from 'styled-components';

const MainLayout: React.FC = function _({ children }) {
  const dispatch = useGlobalReducer();
  const state = useGlboalState();
  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      dispatch({ type: 'SET_MOBILE', payload: true });
    }
    const add = () => {
      if (window.innerWidth < 768) {
        dispatch({ type: 'SET_MOBILE', payload: true });
      } else {
        dispatch({ type: 'SET_MOBILE', payload: false });
      }
    };
    window.addEventListener('resize', add);
    return () => {
      window.removeEventListener('resize', add);
    };
  }, []);
  return (
    <FlexCol>
      <Header isMobile={state.isMobile} />
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
