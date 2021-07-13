import './src/global/reset.css';

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import theme from './theme';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
});

//tst
const themes = extendTheme({ breakpoints });
export const wrapRootElement = ({ element, props }) => {
  return (
    <ChakraProvider {...props} theme={themes}>
    
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {element}
    </ChakraProvider>
  );
};
