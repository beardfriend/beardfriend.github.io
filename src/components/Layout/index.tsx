import Header from '../Header';
import React from 'react';
const index = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default index;
