import { CSSObject, FlattenSimpleInterpolation, SimpleInterpolation, css } from 'styled-components';

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

const sizes: Breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};

type BreakpointEntry = [keyof Breakpoints, Breakpoints[keyof Breakpoints]];
type Interpolation<T> = {
  [key in keyof T]:
    | ((
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation)
    | (() => string);
};

const initAcc: Interpolation<Breakpoints> = {
  xs: () => '',
  sm: () => '',
  md: () => '',
  lg: () => '',
  xl: () => '',
  xxl: () => ''
};

interface CustomObject extends ObjectConstructor {
  entries<K extends keyof Breakpoints, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][];
}

const object: CustomObject = Object;

const media = object.entries(sizes).reduce<Interpolation<Breakpoints>>((acc, cur: BreakpointEntry) => {
  const [key, value] = cur;
  acc[key] = (first, ...interpolations) =>
    css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `;

  return acc;
}, initAcc);

export default media;
