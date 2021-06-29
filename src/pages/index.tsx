import '../global/reset.css';

import { AiFillGithub, AiTwotoneHome } from 'react-icons/ai';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Spacer,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiRedux,
  SiStyledComponents,
  SiTypescript
} from 'react-icons/si';

import { BsPeopleCircle } from 'react-icons/bs';
import Earth from '../utils/earth';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'gatsby';
import { RiStackFill } from 'react-icons/ri';
import profi from '../images/profi.png';
import styled from 'styled-components';

const Index = () => {
  const earthRef: any = useRef();

  useEffect(() => {
    Earth(earthRef);
    return;
  }, []);

  return (
    <>
      <MainLayout>
        <LeftSide ref={earthRef}>
          <Link to='https://github.com/beardfriend' target='_blank'>
            <Flex mt={2}>
              <Text mr={2} color='white'>
                Github
              </Text>
              <AiFillGithub style={{ color: 'white', fontSize: '25px' }} />
            </Flex>
          </Link>

          <Flex w='80%'>
            <Avatar size='xl' name='Sehun' src={profi} mr={{ sm: 2, md: 4 }} />
            <Box display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <Text
                fontSize={{ base: '13px', md: '16px', xl: '18px' }}
                color='white'
                fontWeight='bold'
                mr={{ sm: 2, md: 3 }}
              >
                수염난친구
              </Text>
              <Text
                fontSize={{ base: '30px', xl: '35px', '2xl': '45px' }}
                color='white'
                fontWeight='bold'
              >
                박세훈
              </Text>
            </Box>
          </Flex>
          <Box>
            <Text color='white' textAlign='center'>
              취미는 명상과 요가입니다.
              <br />
              몸과 마음이 유연합니다.
              <br />
              <br />
              급변하는 상황에도
              <br />
              부정적이기보다
              <br />
              <br />
              새로운 것을 즐길 수 있는
              <br />
              유연한 개발자입니다.
            </Text>
          </Box>

          <Flex flexDirection='column' w='80%'>
            <Link to='/' activeClassName='active' activeStyle={{ color: `#009297` }}>
              <Flex alignItems='center'>
                <AiTwotoneHome
                  style={{ color: '#009297', fontSize: '25px', marginRight: '10px' }}
                />
                <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>홈</h1>
              </Flex>
            </Link>

            <Link to='/stack' activeClassName='active' activeStyle={{ color: `#009297` }}>
              <Flex alignItems='center'>
                <RiStackFill style={{ color: '#009297', fontSize: '25px', marginRight: '10px' }} />
                <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>기술스택</h1>
              </Flex>
            </Link>

            <Link to='/introduce' activeClassName='active' activeStyle={{ color: `#009297` }}>
              <Flex alignItems='center'>
                <BsPeopleCircle
                  style={{ color: '#009297', fontSize: '25px', marginRight: '10px' }}
                />
                <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>자기소개</h1>
              </Flex>
            </Link>

            <Link to='' activeClassName='active' activeStyle={{ color: `#009297` }}>
              <Flex alignItems='center'>
                <HiOutlineDocumentText
                  style={{ color: '#009297', fontSize: '25px', marginRight: '10px' }}
                />
                <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>포트폴리오</h1>
              </Flex>
            </Link>
          </Flex>
        </LeftSide>
        <canvas className='webgl'></canvas>
      </MainLayout>
    </>
  );
};

export default Index;
const LeftSide = styled.div`
  padding: 1rem 0.5rem;
  min-width: 500px;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  div {
    margin-left: 1em;
  }
  color: white;

  a {
    cursor: pointer;
    &:hover {
      background: #009297;
      svg {
        color: white !important;
      }
    }
  }
  @media screen and (max-width: 1235px) {
    align-items: center;
    margin: 0;
    padding: 1rem 0;
    min-width: 0;
  }
`;

const MainLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 1235px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
  }
`;
