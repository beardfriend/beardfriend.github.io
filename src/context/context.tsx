import React, { createContext, useContext, useReducer } from 'react';

interface initiStateType {
  allPost: any;
  isMobile: boolean;
  AllCategory: string[];
  NowCategory: string;
  AllTag: string[];
  NowTag: string[];
  NowTitle: string;
  isLoading: boolean | null;
  count: number;
}

export const initialState: initiStateType = {
  allPost: [],
  isMobile: true,
  AllCategory: ['All'],
  NowCategory: 'All',
  AllTag: [],
  NowTag: [],
  NowTitle: '',
  isLoading: null,
  count: 4,
};

type Reducer =
  | { type: 'CATEGORY_MAP'; payload: string }
  | { type: 'NOW_CATEGORY'; payload: string }
  | { type: 'TAG_MAP'; payload: string }
  | { type: 'RESET_TAG' }
  | { type: 'ADD_NOW_TAG'; payload: string }
  | { type: 'DELETE_NOW_TAG'; payload: string }
  | { type: 'RESET_NOW_TAG' }
  | { type: 'SET_MOBILE'; payload: boolean }
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_LOADING_TRUE' }
  | { type: 'SET_LOADING_FALSE' }
  | { type: 'SET_POST'; payload: any }
  | { type: 'RESET_POST' }
  | { type: 'ADD_COUNT' };

export function reducer(state: initiStateType, action: Reducer) {
  switch (action.type) {
    case 'CATEGORY_MAP':
      return { ...state, AllCategory: [...state.AllCategory, action.payload] };
    case 'NOW_CATEGORY':
      return { ...state, NowCategory: action.payload, NowTag: [] };
    case 'TAG_MAP':
      return { ...state, AllTag: [...state.AllTag, action.payload] };

    case 'RESET_TAG':
      return { ...state, AllTag: initialState.AllTag };
    case 'ADD_NOW_TAG':
      return { ...state, NowTag: [...state.NowTag, action.payload] };
    case 'DELETE_NOW_TAG': {
      const newTag = state.NowTag.filter((data) => data !== action.payload);
      return { ...state, NowTag: newTag };
    }
    case 'RESET_NOW_TAG':
      return { ...state, NowTag: [] };
    case 'SET_MOBILE':
      return { ...state, isMobile: action.payload };
    case 'SET_TITLE':
      return { ...state, NowTitle: action.payload };
    case 'SET_LOADING_TRUE':
      return { ...state, isLoading: true };
    case 'SET_LOADING_FALSE':
      return { ...state, isLoading: false };
    case 'SET_POST':
      return { ...state, allPost: action.payload };
    case 'RESET_POST':
      return { ...state, allPost: [] };

    case 'ADD_COUNT':
      return { ...state, count: state.count + 4 };
    default:
      throw new Error('invalid action type');
  }
}

export const stateContext = createContext(initialState);
export const ReducerContext = createContext(null);
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={state}>
      <ReducerContext.Provider value={dispatch}>{children}</ReducerContext.Provider>
    </stateContext.Provider>
  );
}

export function useGlobalReducer() {
  return useContext(ReducerContext);
}

export function useGlboalState() {
  return useContext(stateContext);
}
