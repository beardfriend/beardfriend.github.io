import React from 'react';
import GlobalStyle from './src/global/globalStyle';
import { ContextProvider } from './src/context/context';

export const wrapRootElement = ({ element, props }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      {element}
    </ContextProvider>
  );
};
