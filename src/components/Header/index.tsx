import { Layout } from '@Globals/basic';
import { Link } from 'gatsby';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import styled from 'styled-components';

const Index = ({ isMobile }) => {
  if (isMobile) {
    return (
      <>
        <MobileContainer>
          <Link to='/' className='title'>
            수염난친구 블로그
          </Link>
          <div className='right'>
            <Link to='/' className='menu'>
              전체글
            </Link>
            <Link to='/' className='menu'>
              태그
            </Link>
            <a href='https://github.com/beardfriend' target='_blank'>
              <AiFillGithub className='git' />
            </a>
            <Link to='/introduce'>
              <TiUser className='git' />
            </Link>
          </div>
        </MobileContainer>
      </>
    );
  }
  return (
    <NavContainer>
      <Left>
        <Link to='/' className='title'>
          수염난친구 블로그
        </Link>
        <div>
          <Link to='/' className='menu'>
            전체글
          </Link>
          <Link to='/' className='menu'>
            태그
          </Link>
        </div>
      </Left>
      <Right>
        <a href='https://github.com/beardfriend' target='_blank'>
          <AiFillGithub className='git' />
        </a>
        <Link to='/introduce'>
          <TiUser className='git' />
        </Link>
      </Right>
    </NavContainer>
  );
};

export default Index;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  ${Layout}
  background: #0a0b0c;
  /* ${media.xxl({
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
  display: flex;
  align-items: center;
  gap: 50px;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background: black;
  color: white;

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
  display: flex;

  gap: 50px;
  justify-content: space-between;
  a {
    color: white;
    margin-left: 15px;
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
