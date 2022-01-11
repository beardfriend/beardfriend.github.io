import media from '@Globals/theme';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import { useGlboalState } from '@Contexts/context';
import styled from 'styled-components';

interface IndexType {
  isMobile: boolean;
}

function Index({ isMobile }: IndexType): React.ReactElement {
  const { NowTitle } = useGlboalState();
  const [isShow, setIsShow] = useState(false);
  function func() {
    if (window.scrollY === 0) {
      setIsShow(false);
    }
    if (window.scrollY > 50) {
      setIsShow(true);
    }
  }
  useEffect(() => {
    console.log(isShow, window.scrollY);
    if (!isShow) {
      window.addEventListener('scroll', func);
      return () => window.removeEventListener('scroll', func);
    } else {
      window.addEventListener('scroll', func);
      return () => window.removeEventListener('scroll', func);
    }
  }, [isShow]);

  // useEffect(() => {
  //   if (isShow) {
  //     console.log(isShow);
  //     window.removeEventListener('scroll', func);
  //   }
  // }, [isShow]);

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
    <Header isShow={isShow}>
      <NavContainer>
        <Left>
          <Link to='/' className='title'>
            수염난친구 블로그
          </Link>
        </Left>

        <Title isShow={isShow}>{isShow && NowTitle}</Title>

        <Right>
          <a href='https://github.com/beardfriend' target='_blank' rel='noreferrer'>
            <AiFillGithub className='git' />
          </a>
        </Right>
      </NavContainer>
    </Header>
  );
}

export default Index;

const Title = styled.h1<{ isShow }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
  @media screen and (min-width: 375px) {
    max-width: 170px;
  }

  @media screen and (min-width: 400px) {
    max-width: 200px;
  }

  @media screen and (min-width: 600px) {
    max-width: 250px;
  }

  animation: ${({ isShow }) => isShow && `showup 0.6s`};
  -webkit-animation: ${({ isShow }) => isShow && `showup 0.6s`};
  @-webkit-keyframes showup {
    from {
      margin-top: -10%;
    }
    to {
      margint-top: 0;
    }
  }
  @keyframes showup {
    from {
      margin-top: -10%;
    }
    to {
      margint-top: 0;
    }
  }

  color: white;
  font-size: 1.5rem;
`;

const Header = styled.header<{ isShow }>`
  position: fixed;
  width: 100%;
  height: 6rem;
  padding: 1.6rem 0;
  z-index: 99;
  background: #0a0b0c;
  opacity: ${({ isShow }) => (isShow ? 0.8 : 1)};
  @keyframes back {
    from {
      opacity: 0.9;
    }
    to {
      opcity: 1;
    }
  }
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
