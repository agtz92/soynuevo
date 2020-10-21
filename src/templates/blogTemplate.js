import React from "react"
import { Link, graphql } from "gatsby"
import NavBar from "../components/navbar"
import Heading from "../components/heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
        return (
            <React.Fragment>
            <NavBar />
            <div className="blog-post-container">
                <div className="div-grey-post"></div>
                <div className="blog-post">
                    <div className="top-post">
                        <div className="featuredimage" style={{ backgroundImage: `url(${frontmatter.featuredimage})` }}></div>
                        <div className="short-description">
                            <h1 className="heading dark">{frontmatter.title}</h1>
                            <div className="parpost light">{frontmatter.date}</div>
                            <div><div className="parpost bold">Nivel de experiencia : {frontmatter.dificultad}</div></div>
                            <p className="parpost">{frontmatter.short_description}</p>
                        </div>
                    </div>
                    <div className="div-text-post"><p className="parpost">{markdownRemark.html}</p></div>
                </div>
                <div className="div-grey-post"></div>
            </div>
            </React.Fragment>
        )
    
    
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
`