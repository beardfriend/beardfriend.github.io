import React, { useEffect, useState } from 'react';

import { AiFillGithub } from 'react-icons/ai';
import Hamburger from './Hamburger';
import { Link } from 'gatsby';
import { TiUser } from 'react-icons/ti';
import { media } from '@Globals/theme';
import styled from 'styled-components';

const Index = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const add = () => {
      if (window.innerWidth < 768) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener('resize', add);

    return () => window.removeEventListener('resize', add);
  }, []);
  if (state) {
    return (
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
          <TiUser className='git' />
        </div>
      </MobileContainer>
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
        <TiUser className='git' />
      </Right>
    </NavContainer>
  );
};

export default Index;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;

  justify-content: space-between;
  align-items: center;
  background: #0a0b0c;
  padding: 0 12rem;
  ${media.xl({
    padding: `0 9rem`
  })}
  ${media.lg({
    padding: `0 6rem`
  })}
  ${media.md({
    padding: `0 4rem`
  })}
  ${media.sm({
    padding: `0 1rem`
  })}
`;

const MobileContainer = styled.nav`
  width: 100%;
  align-items: center;
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
