import '../global/reset.css';

import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import Earth from '../utils/earth';
import Layout from '@Components/Layout';

const index = () => {
  const ref: any = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Earth(ref, setLoading);
    if (loading) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ minWidth: '30%', minHeight: '100vh', background: 'black' }} ref={ref}>
          <h1 style={{ color: 'white' }}>test</h1>
        </div>
        <canvas className='webgl'></canvas>
      </div>
    </>
  );
};

export default index;
