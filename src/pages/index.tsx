import React, { useRef, useState } from 'react';

import Header from '@Components/Header';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/index';

const Index = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const ref = useRef(0);

  return (
    <MainLayout>
      <Post />
    </MainLayout>
  );
};

export default Index;
