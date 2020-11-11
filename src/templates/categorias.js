import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import PostBlockLarge from "../components/postblocklarge"

// Components
import { Link, graphql } from "gatsby"

const Categorias = ({ pageContext, data }) => {
    const { categoria } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoriaHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } en la categoría de "${categoria}"`

    return (
        
        <Layout>
            <div>
                
            <h1>{categoriaHeader}</h1>
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