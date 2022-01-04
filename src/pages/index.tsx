import React from 'react';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post/Post';

function Index() {
  return (
    <MainLayout>
      <div style={{ width: '100%', display: 'flex', gap: '5rem' }}>
        <div
          style={{
            display: 'flex',
            flex: '7',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Post />
        </div>

        <div style={{ width: '100%', flex: '3', height: '60rem', background: 'red' }} />
      </div>
    </MainLayout>
  );
}

export default Index;
