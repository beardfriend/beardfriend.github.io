import { Link } from 'gatsby';
import MainLayout from '@Components/Layout/MainLayout';
import React from 'react';
import styled from 'styled-components';
const Introduce = () => {
  return (
    <MainLayout>
      <Link to='/stack'>기술스택</Link>\<Link to='/'>프로젝트</Link>
    </MainLayout>
  );
};

export default Introduce;
