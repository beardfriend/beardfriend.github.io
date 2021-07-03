import { Container } from './stack';
import LeftHeader from '@Components/Header/LeftHeader';
import { MainLayout } from './stack';
import React from 'react';
import styled from 'styled-components';
const Introduce = () => {
  return (
    <MainLayout>
      <LeftHeader />
      <Container>
        <InnerBox>
          <h1 style={{ textAlign: 'center' }}>자기소개</h1>
          <h1>💻 코딩</h1>
          <p>
            "Great"를 해석하면 무엇일까요?
            <br />
            사전에 보면 "큰", "멋진" 등으로 나옵니다.
            <br />
            중학교 쪽지시험에서 Great를 "짱"으로 써서 혼난 기억이 있습니다.
            <br />
            사실 짱보다 더 정확하고 이해하기 쉬운 단어는 없는데 말이죠.
            <br />
          </p>

          <p>
            저는 쉽고 간단한 코드를 지향합니다.
            <br />
            함께 일하는 경우가 많기에, 누구나 읽고 수정할 수 있어야 합니다.
          </p>
          <p>
            공감능력이 중요하다 생각합니다.
            <br />
            좋은 결과물은 팀의 분위기에서 나온다고 생각합니다.
            <br />
            아무리 실력이 좋아도, 함께하지 못한다면
            <br />
            팀플레이에서는 좋은 결과를 내기 힘듭니다.
          </p>

          <p>
            자기소개는 제가 어떤사람인지 알리는 것이 핵심이라 생각합니다.
            <br />
            어떤 스택을 좋아하고, 인터렉션을 좋아한다는 말보다도
            <br />
            회사의 방향과 맞는지 판단할 수 있는
            <br />
            정보를 드리는 게 더 유용하지 않을까 싶습니다.
          </p>

          <h1>🙏🏻요가 & 명상</h1>
          <p>
            저는 요가를 합니다.
            <br />몸 뿐만아니라 마음도 유연합니다.
            <br />
            새로운 일이 주어졌을 때,
            <br />
            즐거운 마음으로 임할 자세가 되어 있습니다.
          </p>
          <p>
            존카밧진의 마음챙김(MBSR)을 통해 업무효율을 올립니다.
            <br />나 자신에 대한 인지능력이 뛰어납니다.
          </p>
          <h1>💻코딩공부과정</h1>
          <p>
            ✔ HTML,CSS,Javascript MDN 튜토리얼
            <br />
            ✔ 틱택토,가위바위보 등등 (ZeroCho)
            <br />
            ✔ React 기초 state, useEffect, reducer 등등 (johnsmilga)
            <br />
            ✔ TODO, 카트 장바구니, API연결 등등 (johnsmilga)
            <br />
            <br />
            ✔ React+FireBase Facebook clone (Clever Code)
            <br />
            ✔ MERN STACK CRUD clone (Javascript Mastery)
            <br />
            ✔ Nodejs, express Basic (johnsmilga)
            <br />
            ✔ FULLSTACK Graphql, React, Typescript,Express, ORM clone(ben awad )
            <br />
          </p>
          <p>
            클론코딩의 결과물은 내것이 아닙니다.
            <br />
            스스로 만들 수 있어야 비로소 내것입니다.
          </p>

          <p>
            okky에서 프론트 전담으로 프로젝트를 1회 완료했고
            <br />
            현재는 더 다양하고 좋은 해결법을 내기위해서
            <br />
            모던 Javascript튜토리얼과 알고리즘 기초를 공부하고 있습니다.
            <br />
          </p>
          <p></p>
        </InnerBox>
      </Container>
    </MainLayout>
  );
};

export default Introduce;

const InnerBox = styled.div`
  width: 80%;
  padding: 2rem;
  box-shadow: rgba(48, 34, 34, 0.56) 0px 22px 70px 4px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 2rem 0;
  }
  hr {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  padding-bottom: 6rem;
  img {
    margin: 1rem 0;
    max-width: 500px;
  }
  p {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1235px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 12px;
    }
    width: 90%;
  }
`;
