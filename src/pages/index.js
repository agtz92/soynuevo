import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import CallToAction from "../components/calltoaction"
import Blockcontainer from "../components/blocksContainer"
import Layout from "../layouts/layout"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function Home({data}) {
  
  return (
    
    <React.Fragment> 
      <Helmet title="Tutoriales de todos los temas | Inicio">
                <meta name="description" content="Aprende una nueva actividad todos los días y conviertete en experto"/>
      </Helmet>
    <Layout>
    <SimpleSlider/>
    <CallToAction/>
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <Link to="/categorias/"><Heading color="dark" >Encuentra todos los tutoriales </Heading></Link>

      <Link to="/categorias/"><h2 className="heading-categoria" style={{color:"#003049"}}>Nuestros últimos tutoriales {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => { 
          return(
          <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
        })}
      </Blockcontainer>
      </div>
      </Layout>
    </React.Fragment>

    
  )
  
}

export const query = graphql`
  query {
    
          allMarkdownRemark(limit: 12, sort: {fields: [frontmatter___date], order: DESC}) {
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