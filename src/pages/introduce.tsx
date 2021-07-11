import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import MainLayout from '@Components/Layout/MainLayout';
import Post from '@Components/Post';
import styled from 'styled-components';

const introduce = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <h1>요가하는 프론트엔드 엔지니어 박세훈</h1>
          <br />
          <Link to='/stack'>
            <Button colorScheme='teal'>기술스택</Button>
          </Link>
        </Container>
      </MainLayout>
    </>
  );
};

export default introduce;
export const Container = styled.div`
  padding: 5rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
