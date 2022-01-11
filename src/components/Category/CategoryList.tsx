import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalReducer, useGlboalState } from '@Contexts/context';

function CategoryList({ data }) {
  const dispatch = useGlobalReducer();
  const { AllCategory, NowCategory } = useGlboalState();

  useEffect(() => {
    const empty = [];
    const result = data.map(({ node }) => {
      if (AllCategory.includes(node.frontmatter.category)) {
        return;
      }
      const filteredCategory = empty.includes(node.frontmatter.category);
      if (!filteredCategory) {
        empty.push(node.frontmatter.category);
      }
    });
    empty.sort().map((categories) => {
      dispatch({ type: 'CATEGORY_MAP', payload: categories });
    });
    console.log(empty);
    return () => result;
  }, []);

  return (
    <CategoryContainer>
      {AllCategory.map((datas) => {
        return (
          <CategoryButton
            key={datas}
            isActive={datas === NowCategory}
            type='button'
            onClick={() => {
              dispatch({ type: 'NOW_CATEGORY', payload: datas });
            }}
          >
            {datas}
          </CategoryButton>
        );
      })}
    </CategoryContainer>
  );
}

export default CategoryList;

const CategoryContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
  display: inline;
  padding: 0.8rem 1.4rem;

  &:not(:first-child) {
    margin-left: 2rem;
  }
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-size: 1.3rem;
  border: 1px solid #ebebeb;
  border-radius: 1rem;
  background: ${({ isActive }) => (isActive ? 'black' : 'white')};
  width: fit-content;
  &:hover {
    cursor: pointer;
    background: ${({ isActive }) => !isActive && '#ebebeb'};
  }
`;
