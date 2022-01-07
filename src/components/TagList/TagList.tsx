import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalReducer, useGlboalState } from '@Contexts/context';

function TagList({ data }) {
  const dispatch = useGlobalReducer();
  const { NowCategory, AllTag, NowTag } = useGlboalState();
  useEffect(() => {
    const newTag = [];
    dispatch({ type: 'RESET_TAG' });
    const result = data.map(({ node }) => {
      if (NowCategory === 'All') {
        node.frontmatter.tags.map((tag) => {
          if (newTag.includes(tag) === false) {
            newTag.push(tag);
          }
        });
      }
      if (node.frontmatter.category === NowCategory) {
        node.frontmatter.tags.map((tag) => {
          if (newTag.includes(tag) === false) {
            newTag.push(tag);
          }
        });
      }
    });

    //

    if (NowCategory === 'All') {
      newTag.map((tags) => {
        dispatch({ type: 'TAG_MAP', payload: tags });
      });
    } else {
      newTag.map((tags) => {
        dispatch({ type: 'TAG_MAP', payload: tags });
      });
    }

    return () => result;
  }, [NowCategory]);

  useEffect(() => {}, [NowTag]);
  function handleChangeTag(datas) {
    if (!NowTag.includes(datas)) {
      dispatch({ type: 'ADD_NOW_TAG', payload: datas });
      return;
    }
    dispatch({ type: 'DELETE_NOW_TAG', payload: datas });
  }

  return (
    <>
      {AllTag.map((datas, index) => {
        return (
          <Tag type='button' isActive={NowTag.includes(datas)} key={index} onClick={() => handleChangeTag(datas)}>
            {datas}
          </Tag>
        );
      })}
    </>
  );
}

export default TagList;

const Tag = styled.button<{ isActive: boolean }>`
  padding: 0.8rem 1.4rem;
  margin-left: 20px;
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-size: 2rem;
  border: 1px solid #ebebeb;
  border-radius: 1rem;
  background: ${({ isActive }) => (isActive ? 'black' : 'white')};

  &:hover {
    cursor: pointer;
    background: ${({ isActive }) => !isActive && '#ebebeb'};
  }
`;
