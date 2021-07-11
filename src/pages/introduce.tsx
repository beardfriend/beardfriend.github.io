import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import styled from 'styled-components';
const Introduce = () => {
  return (
    <MainLayout>
      <h1>요가하는 프론트엔드 엔지니어 박세훈</h1>

      <br />
      <Link to='/stack'>
        <Button colorScheme='teal'>기술스택</Button>
      </Link>
    </MainLayout>
  );
};

export default Introduce;
