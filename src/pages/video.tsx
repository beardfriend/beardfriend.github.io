import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import one from '../images/video/last.mp4';
const video = () => {
  return (
    <MainLayout>
      <video controls style={{ marginTop: '10px' }}>
        <source type='video/mp4' src={one}></source>
      </video>
    </MainLayout>
  );
};

export default video;
