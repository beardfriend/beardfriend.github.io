import { Layout } from '@Globals/basic';
import { sizes } from '@Globals/theme';
import { Link } from 'gatsby';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import styled from 'styled-components';

interface HeaderType {
  isMobile: boolean;
}

const Index = ({ isMobile }: HeaderType) => {
  if (isMobile) {
    return (
      <>
        <HeaderMobileContainer>
          <Logo>
            <Link to='/'>수염난친구 블로그</Link>
          </Logo>
          <Stack>
            <Link to='/' className='font'>
              전체글
            </Link>
            <Link to='/' className='font'>
              태그
            </Link>
            <a href='https://github.com/beardfriend' target='_blank'>
              <AiFillGithub className='icon' />
            </a>
            <Link to='/introduce'>
              <TiUser className='icon' />
            </Link>
          </Stack>
        </HeaderMobileContainer>
      </>
    );
  }

  return (
    <HeaderContainer>
      <Logo>
        <Link to='/'>수염난친구 블로그</Link>
      </Logo>
      <Nav>
        <Link to='/'>전체글</Link>
        <Link to='/'>태그</Link>
      </Nav>
      <Stack>
        <a href='https://github.com/beardfriend' target='_blank'>
          <AiFillGithub className='icon' />
        </a>
        <Link to='/introduce'>
          <TiUser className='icon' />
        </Link>
      </Stack>
    </HeaderContainer>
  );
};

export default Index;
const { xxl, xl, lg, md, sm } = sizes;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  padding: 0 ${Layout.default};
  @media screen and (max-width: ${xxl}) {
    padding: 0 ${Layout.xxl};
  }
  @media screen and (max-width: ${xl}) {
    padding: 0 ${Layout.xl};
  }
  @media screen and (max-width: ${lg}) {
    padding: 0 ${Layout.lg};
  }
  @media screen and (max-width: ${md}) {
    padding: 0 ${Layout.md};
  }
  @media screen and (max-width: ${sm}) {
    padding: 0 ${Layout.sm};
  }

  background: #0a0b0c;
`;

const HeaderMobileContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 5rem;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 6rem;
  padding: 0 ${Layout.sm};
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background: black;
`;

const Logo = styled.div`
  margin-right: 3rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.4rem;
  color: white;
  @media screen and (max-width: ${sm}) {
    margin-right: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  flex: auto;
  font-size: 1.5rem;
  opacity: 0.8;
  color: white;
`;

const Stack = styled.div`
  display: flex;
  gap: 2rem;
  .icon {
    color: white;
    font-size: 25px;
  }
  .font {
    color: white;
    font-size: 1.5rem;
    opacity: 0.8;
    padding-top: 0.2rem;
  }
`;
