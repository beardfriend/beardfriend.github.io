import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { Container } from '../stack';
import LeftHeader from '@Components/Header/LeftHeader';
import { MainLayout } from '../stack';
import Port from '@Components/Port';
import last from '../../images/port/last.jpg';
import one from '../../images/video/last.mp4';
import second from '../../images/port/second.jpg';
import styled from 'styled-components';
import third from '../../images/port/third.jpg';

const Index = () => {
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
            <ModalHeader>
              주요 기술스택:Typescript, React, Chakra, ReduxToolKit, StyledComponent,
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <video controls style={{ maxWidth: '500px' }}>
                <source type='video/mp4' src={one}></source>
              </video>
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
            <ModalBody></ModalBody>
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
            <ModalBody></ModalBody>
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
            <ModalBody></ModalBody>
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
