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
    <Heading color="dark" >Ver categorías</Heading>
      <h2 className="heading-categoria" >Pesca</h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Pesca')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Acampar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Acampar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Asar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Asar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Jardinería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Jardineria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Carpintería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Carpinteria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Cocinar </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Cocinar')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <h2 className="heading-categoria" >Coctelería </h2>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Cocteleria')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
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