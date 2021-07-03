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
              fluid(maxWidth: 10000, quality: 100) {
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
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>철거해줘</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>21.05.01 ~ 21.06.20</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      코로나 시대, 길 곳곳에 임대딱지가 붙어있다. 가게 철거를 빠르고 저렴하게
                      제공하기 위해 서비스를 제작
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      Java백엔드(1명), 프론트엔드 (1명), 기획자(1명)
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      <a href='https://github.com/beardfriend/pleasehaejofront' target='_blank'>
                        https://github.com/beardfriend/pleasehaejofront
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                  <p>▪ Global : 자주 사용하는 css in js 가 존재합니다.</p>
                  <ImageBox>
                    <Img fluid={data.first.edges[2].node.childImageSharp.fluid} />
                  </ImageBox>{' '}
                  <p>▪ Features : REDUX TOOLKIT 로직을 담았습니다.</p>
                  <ImageBox>
                    <Img fluid={data.first.edges[3].node.childImageSharp.fluid} />
                  </ImageBox>{' '}
                  <p>
                    REDUX TOOLKIT을 선택한 이유<br/> 첫 번째는 actions, constants, reducer을 Features 하나에 담는다는 점.
                    <br/> 그로인해 설계,유지보수 면에서 더 수월할 거라 판단했습니다.
                    <br/> 두 번째는 리덕스 공식홈페이지에서 적극적으로 권하고 있기 때문입니다.
                    
                  
                  </p>
                  <h1>⚡ 퍼블리싱</h1>
                  <p>
                    기획자 분께서 Wire Frame을 제공해줬고, 문서를 토대로 화면을 구성했습니다.<br/> 
                    모바일 기획이 없었기 때문에, 반응형은 제공하지 않습니다.
                    
       
                  </p>
            
                  <ImageBox>
                    <Img fluid={data.first.edges[4].node.childImageSharp.fluid} />
                  </ImageBox>
                  <ImageBox>
                    <Img fluid={data.first.edges[5].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>react-page-scroller을 사용하여 스크롤 시 한 페이지씩 넘어가도록 만들었습니다.</p>
                  <h2>레이아웃</h2>
                  <p>
                    STYLED_COMPONET를 사용하여 레이아웃을 만들었습니다.
                    <br/>props를 전달하여, 페이지별로 ChildComponet의 배치, 배경색 등을 바꿀 수 있도록
                    <br/>CSS를 작성했습니다. 
                    <br/>레이아웃을 여러 개 만드는 것보다는,유지보수 면에서 수월할 거라 판단했습니다.
                  </p>
                  <h2>INPUT</h2>
                  <p>
                    이번 프로젝트에서 Input을 많이 사용됐습니다.
                    재사용성을 높히기 위해, <br/>
                    에러메세지 노출, 필수항목여부 등을 하나의 컴포넌트로 제작했습니다.
                  </p>
                
                  <ImageBox>
                    <Img fluid={data.first.edges[6].node.childImageSharp.fluid} />
                  </ImageBox>
                  <h1>👇🏻</h1>
                  <ImageBox>
                    <Img fluid={data.first.edges[7].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>위의 작업 덕분에 코드의 가독성이 높아졌습니다.</p>
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
                    수정사항이 있을 때, Hooks 폴더에서 수정하면, 모든 곳에 적용된 로직이
                    바뀌므로 필수적인 작업입니다.<br/>
                    위 두 개의 사진은 Containers에 로직을 담았을 때와 HOOKS에 분리했을 때의 차이입니다.
                  </p>
                  <h2>버튼 Disable</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[11].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                    위 요청서를 보시면, 필수로 입력해야 하는 칸과 그렇지 않은 칸이 존재합니다.<br/>
                     필수입력사항을 전부 입력했을 때 버튼이 열려야 하는 기능을 구현했습니다.
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
                    Backend로부터 데이터가 한 번에 넘어와도, State에 담을 필요가 없는 데이터가 분명 존재합니다.
                  </p>
                  <ImageBox>
                    <Img fluid={data.first.edges[15].node.childImageSharp.fluid} />
                  </ImageBox>
                  <ImageBox>
                    <Img fluid={data.first.edges[16].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>initialState에 정의해놓은 state에만 데이터가 들어오고 나머지는 버려지도록
                    <br/> 코드를 작성했습니다.
                  </p>
                  <h2>로그인 ,회원가입, 유저타입선택</h2>
                  <ImageBox>
                    <Img fluid={data.first.edges[17].node.childImageSharp.fluid} />
                  </ImageBox>
                  <p>
                   로그인, 회원가입, 유저선택에 대한 순서도를 작성함으로써,
                   <br/>흐름에 문제가 있는지 이해를 빠르게 돕기 위해  시각적으로 제작했습니다.
                   <br/>순서도는 협업할 때, 소통을 더 원할하게 할 수 있도록 도와줍니다.
                  </p>
                  <h2>글 리스트 불러오기 && 상세보기</h2>
                  <p>전체 리스트 최초 진입 시, State에 리스트 항목들을 저장합니다.
                    <br/>이번 프로젝트에서는 리스트에 보여줄 항목 뿐만아니라, 세부 데이터까지 
                    <br/>모두 넘어왔습니다.
                  </p>
<p>따라서, 리스트의 항목을 클릭했을 때, 상세 정보를 불러오는 API가 존재하지만,
  <br/> 전체 리스트에서 id값을 찾아서 상세페이지를 보여주면 어떨까 하는 생각에, 
  <br/>상세페이지는 두 가지 방법으로 만들었습니다. <br/> 첫 번째는 전체리스트에서 API호출 -> 상세페이지에서 API호출 <br/>두 번째 방법은 전체리스트 API호출 -> Filter를 이용해 상세페이지 구성 
  <p>두 가지 방법 중 어떤 방법이 안정적이고 속도나 가격 면에서 효율적인지는 잘 모르겠지만
    <br/>주어진 API를 응용했다는 점에 의미를 두고 싶습니다.
  </p>
</p>
              
                  <h2>CRUD</h2>
                  <p>
                    곳곳에 CRUD 기초가 되는 로직들이 존재합니다.<br/> 하지만, 단기간에 끝내야 하는 프로젝트기 떄문에
                    때문에,<br/> 요청서 수정 등 몇 가지를 제외한 기능이 존재합니다.
                  </p>
                  <h2>에러</h2>
                  <img src={error} />
                  <p>

                    최초 랜딩페이지에서, user정보를 받아오는데, 로그인 되어있지 않았을 때, user정보
                    error가 넘어와야 하는데, 백엔드 단에서 error.message 전달해주는 것을 미뤘습니다. 로그인 되어
                    있지 않았을 때, get이 pending 상태에서 머물러있습니다. setTimeout으로 해결할 수
                    있지만, 백엔드 단에서 정보가 넘어오면 해결되는 문제기 때문에 에러를 냅뒀습니다.
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
            <ModalHeader>두번째 프로젝트</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>인터렉티브 메인페이지</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>21.03.11 ~ 21.03.18</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      인터렉티브한 웹을 구성, 시각적인 아름다움
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>개인</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      <Badge colorScheme='cyan' mr='5px'>
                        React
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        NEXTJS
                      </Badge>
                      <Badge colorScheme='cyan' mr='5px'>
                        Material-ui
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
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      마우스 위치에 따른, animation 실행 && 모든 디자인을 직접 만들면서 UI에 대한
                      개념 확립
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      <a href='https://github.com/beardfriend/sys' target='_blank'>
                        https://github.com/beardfriend/sys
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      <a href='https://beardfriends.vercel.app/' target='_black'>
                        https://beardfriends.vercel.app/
                      </a>
                    </Text>
                  </div>
                </section>
                <ImageBox>
                  {data.second.edges.map((edge) => {
                    return <Img fluid={edge.node.childImageSharp.fluid} alt='name' />;
                  })}
                </ImageBox>
                <Cont>
                  <h1>⚡ 프로젝트 개요</h1>
                  <p>
                    본 프로젝트를 진행하기 전에, React기초를 다졌습니다. <br />
                    퍼블리싱은 프론트엔드 개발의 가장 기초라고 생각했습니다.
                    <br />
                    이미 Antd, MateriUI등 좋은 UI들이 있지만,
                    <br />
                    좋은 품질의 웹사이트를 위해서는 직접 만들 필요가 있다고 느꼈습니다.
                  </p>

                  <p>
                    Interatvice한 웹을 만들기 위해, 디자인 좋은 웹사이트도 찾아보면서,
                    <br />
                    웹사이트를 어떻게 예쁘게 만들까에 대한 고민도 자연스럽게 하게 됐습니다.
                    <br />
                    Styled를 쓰면서 Css를 잘 쓰게 됐으며, Scss를 이용하여
                    <br />
                    모듈을 더 고도화할 수 있게 됐습니다.
                  </p>
                  <p>ContextAPI의 단점과 장점에 대해도 알게 되서 정말 기쁩니다.</p>
                </Cont>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 3 */}
        <Modal onClose={handleClose} size='5xl' isOpen={open === '3'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>세번째 프로젝트</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>MT주얼리</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>20.12. ~ 진행형</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      친구 아시는 분 사업장 업체와 계약
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>팀(벡엔드(1명),프론트(1명))</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      ▪javascript를 이용한 메인페이지 랜덤박스 및 전반적인 디자인 및 프론트기능들
                      <br />▪ async를 이용한 input박스 버튼 클릭 이후 노출
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>x</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
                <Cont>
                  <h1>⚡프로젝트 상세</h1>
                  <p>
                    프로젝트를 진행하면서, 가장 기억에 남는 점은, createElement를 사용하고
                    innerHTML로 네비게이션을 만든 것입니다.
                  </p>
                  <p>고도몰 프로젝트 덕분에 리액트의 편의성을 느꼈습니다. </p>
                  <p>바닐라 자바스크립트를 직접경험할 수 있는 좋은 기회였습니다.</p>
                </Cont>
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 4 */}
        <Modal onClose={handleClose} size='5xl' isOpen={open === '4'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>네번째프로젝트</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ContentBox>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트이름 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>설문지</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 제작기간 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>21.3.30 ~ 21.03.31</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 프로젝트 한 줄 설명 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      단계적으로 넘어가는 설문. JSON형태로 프론트에 데이터 저장
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 팀구성 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>개인</Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사용스택 :
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 상세 업무 및 성과:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      리액트에 대한 이해 및 공부 ▪ chart.js 경험, contextAPI
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 저장소 링크:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
                      <a href='https://github.com/beardfriend/survey' target='_blank'>
                        https://github.com/beardfriend/survey
                      </a>
                    </Text>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text fontSize={{ base: '15px', xl: '18px' }} fontWeight='bold' mr='5px'>
                      ✔ 사이트주소:
                    </Text>
                    <Text fontSize={{ base: '13px', xl: '15px' }}>
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
                        <Img fluid={edege.node.childImageSharp.fluid} alt='name' />
                      </div>
                    );
                  })}
                </ImageBox>
                <Cont>
                  <h1>⚡ 프로젝트 </h1>
                  <p>아주 간단한 작업이지만, 리액트 기초를 쌓는 과정에서</p>
                  <p>당시에는 굉장히 뿌듯함을 느꼈던 프로젝트입니다.</p>
                  <p>redux동작원리나 데이터 연결에 더 신경을 쓸 수도 있었겠지만,</p>
                  <p>위와같은 과정을 거치면서 기초를 단단히 쌓았다고 생각합니다.</p>
                  <p>순수 리액트만으로 만든 프로젝트이니 더욱더 의미가 깊습니다.</p>
                </Cont>
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
    font-size: 15px;
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
  @media screen and (max-width: 1235px) {
    p {
      font-size: 13px;
    }
  }
`;

const ImageBox = styled.div`
  width: 50%;
  height: 100%;

  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
