import media from '@Globals/theme';
import { Link } from 'gatsby';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import styled from 'styled-components';

interface IndexType {
  isMobile: boolean;
}

function Index({ isMobile }: IndexType): React.ReactElement {
  if (isMobile) {
    <MobileContainer>
      <Link to='/' className='title'>
        수염난친구 블로그
      </Link>
      <div className='right'>
        <a href='https://github.com/beardfriend' target='_blank' rel='noreferrer'>
          <AiFillGithub className='git' />
        </a>
        <Link to='/introduce'>
          <TiUser className='git' />
        </Link>
      </div>
    </MobileContainer>;
  }
  return (
    <Header>
      <NavContainer>
        <Left>
          <Link to='/' className='title'>
            수염난친구 블로그
          </Link>
        </Left>
        <Right>
          <a href='https://github.com/beardfriend' target='_blank' rel='noreferrer'>
            <AiFillGithub className='git' />
          </a>
          <Link to='/introduce'>
            <TiUser className='git' />
          </Link>
        </Right>
      </NavContainer>
    </Header>
  );
}

export default Index;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  padding: 1.6rem 0;
  z-index: 99;
  background: #0a0b0c;
`;

const NavContainer = styled.nav`
  display: flex;
  margin: 0 auto;
  width: calc(100% - 2rem);
  max-width: 110rem;
  justify-content: space-between;
  align-items: center;

  /* padding: 0 30rem;
  ${media.xxl({
    padding: `0 12rem`,
  })}
  ${media.xl({
    padding: `0 7rem`,
  })}
  ${media.lg({
    padding: `0 6rem`,
  })}
  ${media.md({
    padding: `0 4rem`,
  })}
  ${media.sm({
    padding: `0 1rem`,
  })} */
`;

const MobileContainer = styled.nav`
  width: 100%;
  align-items: center;
  position: fixed;
  z-index: 99;
  height: 60px;
  background: black;
  color: white;
  display: flex;
  gap: 50px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 1rem;
  .right {
    display: flex;
    gap: 25px;
    align-items: center;
  }
  .title {
    font-size: 20px;
    letter-spacing: -4px;
    font-weight: bold;
  }
  .menu {
    font-size: 15px;
    opacity: 0.8;
  }
  .git {
    color: white;
    font-size: 25px;
  }
`;

const Left = styled.div`
  a {
    color: white;
  }
  .title {
    font-size: 20px;
    letter-spacing: -4px;
    font-weight: bold;
  }
  .menu {
    font-size: 15px;
    opacity: 0.8;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 20px;
  .git {
    color: white;
    font-size: 25px;
  }
`;
