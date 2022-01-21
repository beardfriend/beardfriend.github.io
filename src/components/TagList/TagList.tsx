import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useGlobalReducer, useGlboalState } from '@Contexts/context';
import { GrPowerReset } from 'react-icons/gr';
import Background from '@Components/Background/Background';
import media from '@Globals/theme';
function TagList({ data, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const dispatch = useGlobalReducer();
  const { NowCategory, AllTag, NowTag } = useGlboalState();

  useEffect(() => {
    const newTag = [];
    const count: { [property: string]: string }[] = [];
    dispatch({ type: 'RESET_TAG' });
    const result = data.map(({ node }) => {
      if (node.frontmatter.tags === null) {
        return;
      }
      if (NowCategory === 'All') {
        node.frontmatter.tags.map((tag) => {
          let obj = {};
          const search = count.find((data) => data.tagname === tag);
          if (search !== undefined) {
            search.count += 1;
          } else {
            obj = { count: 1, tagname: tag };
            count.push(obj);
          }
          if (newTag.includes(tag) === false) {
            newTag.push(tag);
          }
        });
      }
      if (node.frontmatter.category === NowCategory) {
        node.frontmatter.tags.map((tag) => {
          let obj = {};
          const search = count.find((data) => data.tagname === tag);
          if (search !== undefined) {
            search.count += 1;
          } else {
            obj = { count: 1, tagname: tag };
            count.push(obj);
          }
          if (newTag.includes(tag) === false) {
            newTag.push(tag);
          }
        });
      }
    });

    //

    if (NowCategory === 'All') {
      count
        .sort(function (a, b) {
          let x = a.tagname.toLowerCase();
          let y = b.tagname.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
        .map((tags) => {
          dispatch({ type: 'TAG_MAP', payload: tags });
        });
    } else {
      count
        .sort(function (a, b) {
          let x = a.tagname.toLowerCase();
          let y = b.tagname.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
        .map((tags) => {
          dispatch({ type: 'TAG_MAP', payload: tags });
        });
    }

    return () => result;
  }, [NowCategory]);

  useEffect(() => {}, [NowTag]);
  function handleChangeTag(datas) {
    if (!NowTag.includes(datas.tagname)) {
      dispatch({ type: 'ADD_NOW_TAG', payload: datas.tagname });
      return;
    }
    dispatch({ type: 'DELETE_NOW_TAG', payload: datas.tagname });
  }

  function TagOpen() {
    setIsOpen(!isOpen);
  }
  const clickFunc = useCallback(
    (e) => {
      if (isOpen) {
        console.log(e.clientX, e.clientY, ref?.current?.getBoundingClientRect());
        if (
          e.clientX > ref?.current?.getBoundingClientRect().right ||
          e.clientX < ref?.current?.getBoundingClientRect().left ||
          e.clientY < ref?.current?.getBoundingClientRect().top ||
          e.clientY > ref?.current?.getBoundingClientRect().bottom
        ) {
          setIsOpen(false);
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    !isOpen ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden');
    if (isOpen) {
      window.addEventListener('click', clickFunc);
      return () => {
        window.removeEventListener('click', clickFunc);
      };
    }
  }, [isOpen]);
  if (isMobile) {
    return (
      <>
        <TagButton onClick={TagOpen} isOpen={isOpen}>
          TAG
        </TagButton>
        {isOpen && (
          <MobileTagContainer ref={ref}>
            <GrPowerReset
              style={{ fontSize: '2rem', cursor: 'pointer', position: 'relative', top: '-0.5rem', width: '100%' }}
              onClick={() => dispatch({ type: 'RESET_NOW_TAG' })}
            />
            {AllTag.map((datas, index) => {
              return (
                <Tag
                  type='button'
                  isActive={NowTag.includes(datas.tagname)}
                  key={index}
                  onClick={() => handleChangeTag(datas)}
                >
                  {datas.tagname}
                  <span>({datas.count})</span>
                </Tag>
              );
            })}
          </MobileTagContainer>
        )}
        <Background open={isOpen} />
      </>
    );
  }
  return (
    <div style={{ marginRight: 0, width: '20rem' }}>
      <TagContainer>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1rem' }}>
          <h1>TAG</h1>
          <GrPowerReset
            style={{ fontSize: '2rem', cursor: 'pointer', position: 'relative', top: '.5rem' }}
            onClick={() => dispatch({ type: 'RESET_NOW_TAG' })}
          />
        </div>
        {AllTag.map((datas, index) => {
          return (
            <Tag
              type='button'
              isActive={NowTag.includes(datas.tagname)}
              key={index}
              onClick={() => handleChangeTag(datas)}
            >
              {datas.tagname}
              <span>({datas.count})</span>
            </Tag>
          );
        })}
      </TagContainer>
    </div>
  );
}

export default TagList;
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 20rem;
  width: 20rem;
  height: 30vh;
  overflow-y: scroll;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;
const Tag = styled.button<{ isActive?: boolean }>`
  padding: 0.8rem 1.4rem;
  margin-left: 20px;
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-size: 1.5rem;
  ${media.sm({
    width: '100%',
    margin: 0,
    height: '3rem',
  })}
  background: ${({ isActive }) => (isActive ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      background: ${({ isActive }) => !isActive && '#ebebeb'};
    }
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TagButton = styled.button<{ isOpen }>`
  z-index: 100;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 5rem;
  height: 3rem;
  border-radius: 5rem;
  background: ${({ isOpen }) => (isOpen ? 'black' : 'gray')};
  color: white;
  font-weight: bold;
`;

const MobileTagContainer = styled.div`
  z-index: 100;
  overflow: scroll;
  position: fixed;
  width: 20rem;
  height: 30rem;
  bottom: 6rem;
  left: 2rem;
  background: #ebebeb;
  border: 1px solid gray;
  padding: 4rem 2rem;
`;
