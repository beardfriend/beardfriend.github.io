import './src/global/reset.css';
import React from 'react';

import { ContextProvider } from './src/context/context';

export const wrapRootElement = ({ element, props }) => {
  return <ContextProvider>{element}</ContextProvider>;
};
