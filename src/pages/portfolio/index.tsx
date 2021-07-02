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
import error from '../../images/port/error.gif';
import last from '../../images/port/last.jpg';
import one from '../../images/video/last.mp4';
import second from '../../images/port/second.jpg';
import skle from '../../images/port/skel.gif';
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
              fluid(maxWidth: 10000, quality: 100) {
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
  console.log(data.first);

  return (
    <MainLayout>
      <LeftHeader />
      <InnerBox>
        <Port title='매칭 서비스' id='1' onClick={handleChange} />
        <Port title='디자인에 신경쓴 웹' img={second} id='2' onClick={handleChange} />
        <Port title='고도몰로 제작한 쇼핑몰' id='3' img={third} onClick={handleChange} />
        <Port title='공부겸 만든 설문' id='4' img={last} onClick={handleChange} />

        <Modal onClose={handleClose} size='5xl' isOpen={open === '1'}>
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
                <Cont>
                  <h1>⚡ 디렉터리 구조</h1>
                  <ImageBox>
                    <Img fluid={data.first.edges[0].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h4>Components → Containers → Pages → App → Index 흐름으로 구성</h4>
                  <br />
                  <p>
                    ▪ Components : 재사용이 가능한 요소들올 모았고, 순수 props를 사용하기 때문에,
                    다양한 Container에서 재사용을 하게 됩니다.
                  </p>
                  <p>
                    ▪ Containers : 컴포넌트들을 모아 화면을 구성했으며, 비즈니스 로직이 담깁니다.
                  </p>
                  <p>
                    ▪ Pages : Layout안에 Container를 담았습니다. 좀더 비즈니스 로직에 집중할 수
                    있게, Pages에 비즈니스 로직을 담았으면 어땠을까 아쉬움이 남습니다.
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[1].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>▪ Global : 공통적으로 자주 사용하는 css in js 가 존재합니다.</p>
                  <ImageBox>
                    <Img fluid={data.first.edges[2].node.childImageSharp.fluid} />
                  </ImageBox>{' '}
                  <p>▪ Features : REDUX TOOLKIT 로직을 담았습니다.</p>
                  <ImageBox>
                    <Img fluid={data.first.edges[3].node.childImageSharp.fluid} />
                  </ImageBox>{' '}
                  <p>
                    REDUX TOOLKIT을 선택한 이유는 actions, constants, reducer을 한 폴더 안에
                    통합해도 깔끔하기 때문입니다. 또한 비즈니스 로직 수정 추가할 때 폴더를 오가는
                    번거로움이 없고, 리덕스 공식홈페이지에서 추천하는 방법이기 때문에, 위 방법을
                    선택했습니다
                  </p>
                  <h1>⚡ 퍼블리싱</h1>
                  <p>
                    기획자 분께서 Wire Frame을 작성한 것을 토대로 화면을 구성했고, PC 기준으로만
                    퍼블리싱을 완료한 상태이며, 퍼블리싱에 대한 부분은 다른 포트폴리오에
                    마련해놨습니다.
                  </p>
                  <p>
                    본프로젝트는 퍼블리싱보다는 백엔드와 프론트앤드 연결하는 것에 우선순위를
                    뒀습니다.
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[4].node.childImageSharp.fluid} />
                  </ImageBox>
                  <ImageBox>
                    <Img fluid={data.first.edges[5].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>react-page-scroller을 사용하여 스크롤 시 한 페이지씩 넘어가게 구현했습니다.</p>
                  <h2>레이아웃</h2>
                  <p>
                    STYLED COMPONET를 사용하여 공통으로 레이아웃을 사용하되, 배경색, 중앙배치인지
                    아닌지 등을 props에 담았기 때문에, 한개의 컴포넌트를 사용하되, 필요에 따라 위치,
                    색을 바꿀 수 있게 구현했습니다. 레이아웃이 여러개가 아닌, 한 개이기 때문에,
                    수정에 용이합니다.
                  </p>
                  <h2>INPUT</h2>
                  <p>
                    견적서작성, 로그인, 회원가입 등 이번 프로젝트에서 Input이 가장 많이
                    사용됐습니다.
                  </p>
                  <p>
                    폼 입력시 필수항목인지, 데이터를 불러올 때 스켈레톤, 입력완료됐을 때 체크아이콘,
                    경고메세지 등을 하나로 통합해 Containers에서 공통으로 사용할 수 있게
                    구현했습니다.{' '}
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[6].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h1>👇🏻</h1>
                  <ImageBox>
                    <Img fluid={data.first.edges[7].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>덕분에 Containers에서 간결함을 얻을 수 있었습니다.</p>
                  <ImageBox>
                    <Img fluid={data.first.edges[8].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h2>SKELETON</h2>
                  <img src={skle} />
                  <br />
                  <h1>⚡ 기능구현</h1>
                  <h2>이메일형식인지 , 비밀번호 글자 수 , 비밀번호 일치여부 기능</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[9].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h1>👇🏻</h1>
                  <ImageBox>
                    <Img fluid={data.first.edges[10].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                    공통으로 사용되는 것들을 묶어 CustomHooks화 하여 코드의 간결함과 직관성을
                    얻었습니다. 수정사항이 있을 때, Hooks 폴더에서 수정하면, 모든 곳에 적용된 로직이
                    바뀌므로 필수적인 작업입니다.
                  </p>
                  <h2>버튼 Disable</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[11].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                    위 요청서를 보시면, 필수입력사항과 그렇지 않은 칸이 섞여있습니다. 필수입력사항을
                    전부 입력했을 때 버튼이 열려야 하는 기능을 구현했습니다.
                  </p>
                  <p>
                    필수입력란의 첫 state값을 undefined로 지정하고 state의 undefined값을 모두
                    긁어모아 undefined의 value가 모두 undefined가 아니면, 버튼이 열리도록 코드를
                    짰습니다.
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[12].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h2>카카오지도</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[13].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                    UI는 DAUMPOST를 사용했습니다. 지도에, 사용자 위치를 표시할 경우를 대비해 카카오
                    LOCAL을 이용해 좌표값까지 저장하는 형태로 구현했습니다.
                  </p>
                  <h2>권한별 접근금지</h2>
                  <p>
                    로그인 했을 경우, signup, login 페이지 접근 금지 및 사용자페이지에는 파트너 접근
                    금지, 파트너페이지에는 사용자 접근 금지 등 histor.push를 통해 구현했습니다.
                  </p>
                  <br />
                  <h1>⚡데이터 연결</h1>
                  <ImageBox>
                    <Img fluid={data.first.edges[14].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h2>원하는 데이터만 받기</h2>
                  <p>
                    Backend로부터 데이터가 한 번에 넘어와도, 필요하지 않은 데이터가 분명 존재한다.
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[15].node.childImageSharp.fluid} />
                  </ImageBox>
                  <ImageBox>
                    <Img fluid={data.first.edges[16].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>initialState에 정의해놓은 state에만 데이터가 들어오고 나머지는 버려진다</p>
                  <h2>로그인 ,회원가입, 유저타입선택</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[17].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                    회원가입 이후
                    <br /> 유저타입을 선택하지 않은 경우,
                    <br /> 재로그인 시, 유저타입을 선택하는 창으로 넘겨주는 것 외에는
                    <br />
                    로그인,회원가입에서 대부분의 홈페이지와 동일한 알고리즘을 적용했으며
                    <br />
                    알고리즘을 짤 때, 다른 사람들의 코드를 참조하지 않고 직접 생각하고 짰다는 사실에
                    의미를 두고 있습니다.
                  </p>
                  <h2>글 리스트 불러오기 && 상세보기</h2>
                  <p>글목록 전체 보는 api와, 상세하게 보는 api 두 개가 따로 존재합니다. </p>
                  <p>
                    API를 사용하여 id값을 직접 넣어주는 방법과, 불러온 전체 글 리스트에서 filter를
                    통해 id값과 일치한 문서를 프론트 단에서 처리해서 넘겨주는 두 가지 방식으로
                    코드를 짜봤습니다.
                  </p>
                  <h2>CRUD</h2>
                  <p>
                    곳곳에 CRUD 기초가 되는 로직들이 존재합니다. 하지만, 100%완성된 프로젝트가
                    아니기 때문에, 요청서 수정 등 몇 가지 빠진 기능들이 존재합니다.
                  </p>
                  <h2>에러</h2>
                  <img src={error} />
                  <p>
                    최초 랜딩페이지에서, user정보를 받아오는데, 로그인 되어있지 않았을 때, user정보
                    error가 넘어와야 하는데, 백엔드 단에서 처리를 차후로 미뤘습니다. 로그인 되어
                    있지 않았을 때, get이 pending 상태에서 머물러있습니다. setTimeout으로 해결할 수
                    있지만, 백엔드 단에서 정보가 넘어오는 걸 기다리고 있습니다
                  </p>
                  <h1>⚡ 마무리</h1>
                  <p>
                    본 프로젝트에서 클론코딩을 제외하고 처음으로 reduxtoolkit과 typescript를 스스로
                    사용해봤습니다. redux는 걷어내는 추세라는 얘기를 듣고 swr이나 graphql을 쓸까도
                    고민해봤지만, redux의 devtools의 편리함과 toolkit의 장점 그리고 벡엔드
                    graphql러닝커브로 인한 부담때문에, reduxtoolkit을 선택하게 됐습니다. redux를
                    사용하면서 아쉬웠던 점은, reducer내에서 외부 reducer를 dispatch할 수 없었다는
                    점이 다소 아쉬웠습니다.
                  </p>
                  <p>
                    본 프로젝트를 진행하면서, 벡엔드와의 통신을 최소한으로 줄이기 위해, 고민을 많이
                    했으며, 기간이 긴 편은 아니여서, Form입력 속도향상, 데이터 처리 속도 향상 등을
                    고려하지 못해, 다소 아쉬움이 남지만, 협업하면서 백엔드와 소통하고 기획서
                    명세서대로 코딩을 하여 정말 값진 시간이었습니다.
                  </p>
                </Cont>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 2 */}
        <Modal onClose={handleClose} size='5xl' isOpen={open === '2'}>
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

const Cont = styled.div`
  width: 100%;
  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    margin: 1rem 0;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    margin: 1rem 0;
  }
  p {
    font-size: 20px;
    margin: 0.7rem;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  img {
    width: 50%;

    margin: 1rem 0;
    height: 100%;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
