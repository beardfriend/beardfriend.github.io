import React from 'react'
import styled from 'styled-components'
import { graphql,useStaticQuery } from 'gatsby';


const index = () => {
  const data = useStaticQuery(graphql`
    query  {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          tags
          title
          date(formatString: "YYYY.MM.DD")
          subtitle
        }
      }
    }
  }
}
  `)
  const blogPost = data.allMarkdownRemark.edges
  console.log(blogPost)
    return (
        <>
        {blogPost.map((nodes:any)=>{
          const {node} = nodes
          return(
            <Layout>
        <h1>{node.frontmatter.title}</h1>
        <p>{node.frontmatter.subtitle}</p>
        <p>📆{node.frontmatter.date}</p>
            </Layout>
          )
        })}
        </>
    )
}

export default index



const Layout = styled.div `
  width:80%;
  height:200px;
  border-bottom:1px solid #dddddd;
  margin: 0 auto;

  h1{
    
  }

`