import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import NavBar from "../components/navbar"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import Blockcontainer from "../components/blocksContainer"

export default function Home({data}) {
  return (
    
    <React.Fragment>
    <NavBar />
    <SimpleSlider/>
    <Heading color="dark">Ver categorías</Heading>
      <h2 >Pesca</h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Pesca')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Acampar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Acampar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Asar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Asar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Jardinería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Jardineria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Carpintería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Carpinteria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Cocinar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Cocinar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }
        })}
      </Blockcontainer>
      <h2 >Coctelería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Cocteleria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
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
                  short_description
                }
                excerpt
              }
            }
          }

  }
`