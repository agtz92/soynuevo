import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import Blockcontainer from "../components/blocksContainer"
import Layout from "../layouts/layout"

export default function Home({data}) {
  return (
    
    <React.Fragment>
    <Layout>
    <SimpleSlider/>
    <Link to="/categorias/"><Heading color="dark" >Ver categorías</Heading></Link>
      <Link to="/categorias/pesca/"><h2 className="heading-categoria" >Pesca</h2></Link>
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
      <Link to="/categorias/acampar/"><h2 className="heading-categoria" >Acampar</h2></Link>
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
      <Link to="/categorias/asar/"><h2 className="heading-categoria" >Asar</h2></Link>
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
      <Link to="/categorias/jardineria/"><h2 className="heading-categoria" >Jardinería</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Jardinería')) {
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
      <Link to="/categorias/carpinteria/"><h2 className="heading-categoria" >Carpintería</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Carpintería')) {
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
      <Link to="/categorias/cocinar/"><h2 className="heading-categoria" >Cocinar</h2></Link>
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
      <Link to="/categorias/cocteleria/"><h2 className="heading-categoria" >Coctelería</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Coctelería')) {
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
      </Layout>
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