import React from 'react'
import styled from 'styled-components'
import { graphql,useStaticQuery, Link } from 'gatsby';


const index = () => {
  const data = useStaticQuery(graphql`
    query  {
  allMarkdownRemark {
    edges {
      node {
        id
          fields {
              slug
            }
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
              <Link to={node.fields.slug}>
        <h1>{node.frontmatter.title}</h1>
        <p>{node.frontmatter.subtitle}</p>
        <p>📆{node.frontmatter.date}</p>
        </Link>
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
    cursor:pointer;
  }

  a{
    text-decoration: none;
    &:hover, :active, :visited {
      color:black;
    }
  }
`