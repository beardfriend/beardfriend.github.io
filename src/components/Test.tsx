import React, { memo } from 'react';

const Test = ({ count }) => {
  return <div>{count}</div>;
};

export default memo(Test);
