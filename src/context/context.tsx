import React, { createContext, useContext, useReducer } from 'react';

interface initiStateType {
  first: boolean;
  AllCategory: string[];
  NowCategory: string;
  AllTag: string[];
  NowTag: string[];
}

export const initialState: initiStateType = {
  first: false,
  AllCategory: ['All'],
  NowCategory: 'All',
  AllTag: [],
  NowTag: [],
};

type Reducer =
  | { type: 'CATEGORY_MAP'; payload: string }
  | { type: 'NOW_CATEGORY'; payload: string }
  | { type: 'TAG_MAP'; payload: string }
  | { type: 'RESET_TAG' }
  | { type: 'ADD_NOW_TAG'; payload: string }
  | { type: 'DELETE_NOW_TAG'; payload: string }
  | { type: 'RESET_NOW_TAG' };

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
