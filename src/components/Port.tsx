import { Button } from '@chakra-ui/react';
import { GiWormMouth } from 'react-icons/gi';
import { Link } from 'gatsby';
import React from 'react';
import first from '../images/port/first.jpg';
import styled from 'styled-components';
const Port = ({ img, title, id, onClick }) => {
  return (
    <CardBox id={id} onClick={onClick}>
      <ImgContainer>
        <img src={img} alt={title} />
        <Icon />
      </ImgContainer>
      <h1>{title}</h1>
    </CardBox>
  );
};

export default Port;
const CardBox = styled.div`
  position: relative;
  &:visited,
  &:link {
    color: black;
  }

  width: 350px;
  height: 350px;
  max-height: 350px;
  max-width: 350px;
  box-shadow: 0 20px 10px -15px rgb(197 192 249 / 20%);
  background: white;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  img {
    filter: brightness(0.8);
  }
  &:hover {
    img {
      filter: brightness(1);
    }
    transform: scale(1.03);
  }
  h1 {
    margin-top: 2rem;
    font-size: 25px;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;
const Icon = styled(GiWormMouth)`
  font-size: 50px;
  color: #003d8d;

  position: absolute;

  justify-content: center;
  display: flex;
  align-items: center;

  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const ImgContainer = styled.div`
  transition: all 0.3s ease-in-out;
  img {
    width: 100%;
    max-height: 200px;
    min-height: 200px;
    padding: 5px;

    object-position: center;
    object-fit: cover;
  }
`;

Port.defaultProps = {
  img: first,
  title: 'test'
};
