import React, { useRef, useState } from 'react';

import Grid from '@Components/Layout/Grid';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/index';

const Index = () => {
  return (
    <MainLayout>
      <Grid>
        <Post />
      </Grid>
    </MainLayout>
  );
};

export default Index;
