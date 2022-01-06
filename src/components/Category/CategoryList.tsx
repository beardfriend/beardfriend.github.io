import React, { useEffect } from 'react';
import { useGlobalContext } from '@Contexts/context';

function CategoryList({ data }) {
  const { categoryList, setCategoryList } = useGlobalContext();

  useEffect(() => {
    const empty = [];
    const result = data.map(({ node }) => {
      if (categoryList.includes(node.frontmatter.category)) {
        return;
      }
      const filteredCategory = empty.includes(node.frontmatter.category);
      if (!filteredCategory) {
        empty.push(node.frontmatter.category);
      }
    });
    empty.map((data) => {
      setCategoryList((datas) => [...datas, data]);
    });
    return () => result;
  }, []);

  return (
    <>
      {categoryList.map((datas, index) => {
        return <div key={index}>{datas}</div>;
      })}
    </>
  );
}

export default CategoryList;
