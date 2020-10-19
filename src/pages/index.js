import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import NavBar from "../components/navbar"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import PostBlockContainer from "../components/postBlockContainer"
import Blockcontainer from "../components/blocksContainer"
import bg1 from '../images/slider/asar.jpg'
import bg2 from '../images/slider/pesca.jpg'
import bg3 from '../images/slider/acampar.jpg'
import bg4 from '../images/slider/carpinteria.jpg'
import bg5 from '../images/slider/cocinar.jpg'
import bg6 from '../images/slider/cocteleria.jpg'
import bg7 from '../images/slider/jardineria.jpg'

export default function Home({data}) {
  let styles = {
    height: '100vh'
  };
  return (
    
    <React.Fragment>
    <NavBar />
    <SimpleSlider/>
    <Heading color="dark">Ve nuestras categorías</Heading>
      
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.frontmatter.slug}>
            <PostBlock name={node.frontmatter.title} text={node.excerpt} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>
        ))}
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