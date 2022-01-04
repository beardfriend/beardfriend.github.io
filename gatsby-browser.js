import React from 'react';
import GlobalStyle from './src/global/globalStyle';

export const wrapRootElement = ({ element, props }) => {
  return (
    <div>
      <GlobalStyle />
      {element}
    </div>
  );
};
