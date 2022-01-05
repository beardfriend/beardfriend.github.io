import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/context';

function TagList({ data }) {
  const { tagList, setTagList, nowCategory } = useGlobalContext();
  useEffect(() => {
    const result = data.map(({ node }) => {
      if (nowCategory === 'ALL') {
        node.frontmatter.tags.filter((tag) => {
          if (!tagList.includes(tag)) {
            setTagList((taglist) => [...taglist, tag]);
          }
        });
      }
      if (node.frontmatter.category === nowCategory) {
        node.frontmatter.tags.filter((tag) => {
          if (!tagList.includes(tag)) {
            setTagList((taglist) => [...taglist, tag]);
          }
        });
      }
    });
    return () => result;
  }, []);

  return (
    <>
      {tagList.map((datas, index) => {
        return <div key={index}>{datas}</div>;
      })}
    </>
  );
}

export default TagList;
