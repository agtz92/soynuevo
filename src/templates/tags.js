import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import PostBlockLarge from "../components/postblocklarge"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } con la etiqueta "${tag}"`

    return (
        
        <Layout>
            <div>
            <h1>{tagHeader}</h1>
            <ul className="list-posts">
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter
                    const { title } = node.frontmatter
                    const { short_description } = node.frontmatter
                    const { dificultad } = node.frontmatter
                    const { featuredimage } = node.frontmatter.featuredimage
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
            <Link to="/tags">Ve todos los tags</Link>
        </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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