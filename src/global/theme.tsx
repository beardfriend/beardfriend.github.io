import { css } from 'styled-components';

export const setContent = {
  center: 'center',
  space: 'space-between'
};

export const setFont = {
  fontSm: '0.875rem', //14px
  fontMed: '1.125rem' //18px
};

export const sizes: any = {
  desktop: 1400,
  tablet: 1024,
  phone: 790,
  smart: 400
};

// Iterate through the sizes and create a media template
export const breakUp = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (args: any) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `;

  return acc;
}, {});

export const breakDown = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${(sizes[label] - 1) / 16}em) {
      ${css(new Array().push(args))}
    }
  `;

  return acc;
}, {});
