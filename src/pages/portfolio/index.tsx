import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../stack';
import Img from 'gatsby-image';
import LeftHeader from '@Components/Header/LeftHeader';
import { MainLayout } from '../stack';
import Port from '@Components/Port';
import last from '../../images/port/last.jpg';
import one from '../../images/video/last.mp4';
import second from '../../images/port/second.jpg';
import styled from 'styled-components';
import third from '../../images/port/third.jpg';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      first: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/port/first" }
        }
      ) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      second: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/port/second" }
        }
      ) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      third: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/port/third" }
        }
      ) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      fourth: allFile(
        sort: { fields: name, order: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          dir: { eq: "/var/www/personal/beardfriend.github.io/src/images/port/fourth" }
        }
      ) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              id
              fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState('');
  const handleChange = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === '1') {
      setOpen('1');
      onOpen();
    }
    if (e.currentTarget.id === '2') {
      setOpen('2');
      onOpen();
    }
    if (e.currentTarget.id === '3') {
      setOpen('3');
      onOpen();
    }
    if (e.currentTarget.id === '4') {
      setOpen('4');
      onOpen();
    }
  };
  const handleClose = () => {
    setOpen('');
  };

  return (
    <MainLayout>
      <LeftHeader />
      <InnerBox>
        <Port title='매칭 서비스' id='1' onClick={handleChange} />
        <Port title='디자인에 신경쓴 웹' img={second} id='2' onClick={handleChange} />
        <Port title='고도몰로 제작한 쇼핑몰' id='3' img={third} onClick={handleChange} />
        <Port title='공부겸 만든 설문' id='4' img={last} onClick={handleChange} />

        <Modal onClose={handleClose} size='full' isOpen={open === '1'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>첫번째 프로젝트</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>철거해줘</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>21.05.01 ~ 21.06.20</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      코로나 시대, 길 곳곳에 임대딱지가 붙어있다. 가게 철거를 빠르고 저렴하게
                      제공하기 위해 서비스를 제작
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      Java백엔드(1명), 프론트엔드 (1명), 기획자(1명)
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <Badge colorScheme='cyan' mr='5px'>
                        React
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Typescript
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Chakra-UI
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Styled_Component
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Redux_toolkit
                      </Badge>
                      <Badge colorScheme='gray' mr='5px'>
                        SpringBOOT
                      </Badge>
                      <Badge colorScheme='gray' mr='5px'>
                        MYSQL
                      </Badge>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      ▪ 반복사용되는 함수를 HOOKS화,
                      <br />
                      <br /> ▪ AXIOS로부터 넘어오는 데이터를 가공할 때, Object,Reduce,Map함수를
                      이용해 반복적인 작업 함수화
                      <br />
                      <br />▪ 엄격한 ESLINT, Prettier을 적용했으나, 팀원들이 로컬에서 테스트하기
                      번거로워서, 유연하게 제거
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='https://github.com/beardfriend/pleasehaejofront' target='_blank'>
                        https://github.com/beardfriend/pleasehaejofront
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      백엔드 분이 바빠서 로컬에서 녹화한 영상으로 대체
                    </Text>
                  </div>
                </section>
                <video controls style={{ marginTop: '10px' }}>
                  <source type='video/mp4' src={one}></source>
                </video>
                <ImageBox>
                  {data.first.edges.map((edege) => {
                    return (
                      <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '20px' }}>{edege.node.name}</h1>
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 2 */}
        <Modal onClose={handleClose} size='full' isOpen={open === '2'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>인터렉티브 메인페이지</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>21.03.11 ~ 21.03.18</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      인터렉티브한 웹을 구성, 시각적인 아름다움
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>개인</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <Badge colorScheme='cyan' mr='5px'>
                        React
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        NEXTJS
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Styled_Component
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        ContextAPI
                      </Badge>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      마우스 위치에 따른, animation 실행 && 모든 디자인을 직접 만들면서 UI에 대한
                      개념 확립
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='https://github.com/beardfriend/sys' target='_blank'>
                        https://github.com/beardfriend/sys
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='https://beardfriends.vercel.app/' target='_black'>
                        https://beardfriends.vercel.app/
                      </a>
                    </Text>
                  </div>
                </section>

                <ImageBox>
                  {data.second.edges.map((edege) => {
                    return (
                      <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '20px' }}>{edege.node.name}</h1>
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 3 */}
        <Modal onClose={handleClose} size='full' isOpen={open === '3'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>MT주얼리</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>20.12. ~ 진행형</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      친구 아시는 분 사업장 업체와 계약
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>팀(벡엔드(1명),프론트(1명))</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <Badge colorScheme='cyan' mr='5px'>
                        HTML
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        CSS
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        JAVASCRIPT
                      </Badge>
                      <Badge colorScheme='gray' mr='5px'>
                        고도몰
                      </Badge>
                      <Badge colorScheme='gray' mr='5px'>
                        MYSQL
                      </Badge>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      ▪javascript를 이용한 메인페이지 랜덤박스 및 전반적인 디자인 및 프론트기능들
                      <br />▪ async를 이용한 input박스 버튼 클릭 이후 노출
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>x</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='http://onandoncoop.godomall.com/' target='_black'>
                        http://onandoncoop.godomall.com/
                      </a>
                    </Text>
                  </div>
                </section>

                <ImageBox>
                  {data.third.edges.map((edege) => {
                    return (
                      <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '20px' }}>{edege.node.name}</h1>
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 4 */}
        <Modal onClose={handleClose} size='full' isOpen={open === '4'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>설문지</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>21.3.30 ~ 21.03.31</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      단계적으로 넘어가는 설문. JSON형태로 프론트에 데이터 저장
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>개인</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <Badge colorScheme='cyan' mr='5px'>
                        React
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        NEXTJS
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Styled_Component
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        ContextAPI
                      </Badge>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      리액트에 대한 이해 및 공부 ▪ContextAPI의 단점 채득 ▪ chart.js 경험
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='https://github.com/beardfriend/survey' target='_blank'>
                        https://github.com/beardfriend/survey
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '25px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '22px' }}>
                      <a href='https://survey-hun95.vercel.app/' target='_black'>
                        https://survey-hun95.vercel.app/
                      </a>
                    </Text>
                  </div>
                </section>

                <ImageBox>
                  {data.fourth.edges.map((edege) => {
                    return (
                      <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '20px' }}>{edege.node.name}</h1>
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </InnerBox>
    </MainLayout>
  );
};

export default Index;

const InnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 4rem 0;

  @media screen and (max-width: 1235px) {
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 768px) {
    video {
      width: 100%;
    }
    padding: 0;
  }
  video {
    max-width: 1000px;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
