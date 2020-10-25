import React from "react"
import { Link, graphql } from "gatsby"
// Components
import { Helmet } from "react-helmet"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import logoChico from "../images/logo_small.png"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
// Utilities
import kebabCase from "lodash/kebabCase"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = markdownRemark
    const perro = "https://goofy-tereshkova-e4b6bf.netlify.app/" + frontmatter.slug + "/";
        return (
          
            <React.Fragment>
              <Helmet title={frontmatter.title}>
                <script type="application/ld+json">
                  {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":\"${perro}\"
                  },
                  "headline": \"${frontmatter.title}\",
                  "description": \"${frontmatter.short_description}\",
                  "image": \"https://goofy-tereshkova-e4b6bf.netlify.app${frontmatter.featuredimage}\",  
                  "author": {
                    "@type": "Organization",
                    "name": "soy-nuevo.com"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "soy-nuevo",
                    "logo": {
                      "@type": "ImageObject",
                      "url": \"https://goofy-tereshkova-e4b6bf.netlify.app${logoChico}\"
                    }
                  },
                  "datePublished": \"${frontmatter.date}\",
                  "dateModified": \"${frontmatter.date}\"
                }
                `}
                </script>
              </Helmet>
            <Layout>
            <div className="blog-post-container">
                <div className="div-grey-post"></div>
                <div className="blog-post">
                    <div className="top-post">
                        <div className="featuredimage" style={{ backgroundImage: `url(${frontmatter.featuredimage})` }}></div>
                        <div className="short-description">
                            <Heading color="dark">{frontmatter.title}</Heading>
                            <div className="parpost light">{frontmatter.date}</div>
                                <div className="tags-div">
                                    {frontmatter.tags.map((tag) => (
                                            <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}><div className="div-tag">{tag}</div></Link>
                                    ))}</div>
                                
                                
                            <div><div className="parpost bold">Nivel de experiencia : {frontmatter.dificultad}</div></div>
                            <p className="parpost">{frontmatter.short_description}</p>
                        </div>
                    </div>
                    <div className="div-text-post"><p className="parpost">{markdownRemark.html}</p></div>
                </div>
                <div className="div-grey-post"></div>
            </div>
            </Layout>
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