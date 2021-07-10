import React, { useRef, useState } from 'react';

import Grid from '@Components/Layout/Grid';
import Header from '@Components/Header';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/index';

const Index = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const ref = useRef(0);

  return (
    <MainLayout>
      <Grid>
        <Post />
      </Grid>
    </MainLayout>
  );
};

export default Index;
