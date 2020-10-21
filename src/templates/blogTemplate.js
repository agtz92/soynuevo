import React from "react"
import { graphql } from "gatsby"
import blogLayout from "../layouts/blog-layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <React.Fragment>
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
            <blogLayout background={frontmatter.featuredimage} title={frontmatter.title} date={frontmatter.date} dificultad={frontmatter.dificultad} />
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
        
      }
    }
  }
`