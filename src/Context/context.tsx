import React, { createContext, useState, useContext } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {
  const [tagList, setTagList] = useState([]);
  const [categoryList, setCategoryList] = useState(['ALL']);
  const [nowCategory, setNowCategory] = useState('Front');
  const [nowTag, setNowTag] = useState([]);
  return (
    <Context.Provider value={{ tagList, setTagList, categoryList, setCategoryList, nowCategory, nowTag, setNowTag }}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
