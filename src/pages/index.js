import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import NavBar from "../components/navbar"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import Blockcontainer from "../components/blocksContainer"
import BlogLayout from "../layouts/blog-layout"

export default function Home({data}) {
  return (
    
    <React.Fragment>
    <NavBar />
    <SimpleSlider/>
    <Heading color="dark">Ver categorías</Heading>
      
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Pesca')){ return(
          <Link to={node.frontmatter.slug}>
            <PostBlock name={node.frontmatter.title} text={node.excerpt} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }
        })}
      </Blockcontainer>
    </React.Fragment>

    
  )
  
}
export const query = graphql`
  query {
    
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "DD MMMM, YYYY")
                  slug
                  dificultad
                  featuredimage
                  tags
                  title
                  categoria
                }
                excerpt
              }
            }
          }

  }
`