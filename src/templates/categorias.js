import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import PostBlockLarge from "../components/postblocklarge"
import CategoryHeader from "../components/categoryHeader"


// Components
import { Link, graphql } from "gatsby"

const imageMapper ={
  Pesca: require("../images/slider/pesca.jpg"),
  Acampar: require("../images/slider/acampar.jpg"),
  Carpintería: require("../images/slider/carpinteria.jpg"),
  Coctelería: require("../images/slider/cocteleria.jpg"),
  Jardinería: require("../images/slider/jardineria.jpg"),
  Cocinar: require("../images/slider/cocinar.jpg"),
  Asar: require("../images/slider/asar.jpg")
}

const Categorias = ({ pageContext, data }) => {
    const { categoria } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoriaHeader = `${totalCount} tutorial${
        totalCount === 1 ? "" : "es"
        } en la categoría de "${categoria}"`

    return (
        
        <Layout>
            <div>
            <CategoryHeader background={imageMapper[categoria]} category={categoria} descripcion={categoriaHeader} />  
            



            <ul className="list-posts">
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter
                    const { title } = node.frontmatter
                    const { short_description } = node.frontmatter
                    const { dificultad } = node.frontmatter
                    const { featuredimage } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={`/${slug}`}>
                                <PostBlockLarge title={title} img={featuredimage} nivel={dificultad} description={short_description}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/categorias">Ve todas las categorias</Link>
        </div>
        </Layout>
    )
}

Categorias.propTypes = {
    pageContext: PropTypes.shape({
        categoria: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Categorias

export const pageQuery = graphql`
  query($categoria: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categoria: { in: [$categoria] } } }
    ) {
      totalCount
      edges {
        node {
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
        }
      }
    }
  }
`