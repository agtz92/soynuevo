import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"

export default function BlogLayout({ props }) {
    return (
        <div className="blog-post-container">
            <div className="div-grey-post"></div>
            <div className="blog-post">
                <div className="top-post">
                    <div className="featuredimage" style={{ backgroundImage: `url(${props.background})` }}></div>
                    <div className="short-description">
                        <h1 className="heading dark">{props.title}</h1>
                        <div className="parpost light">{props.date}</div>
                        <div><div className="parpost bold">Nivel de experiencia : {props.dificultad}</div></div>
                        <p className="parpost">{props.shortdescription}</p>
                    </div>
                </div>
                <div className="div-text-post"><p className="parpost">L{props.body}</p></div>
            </div>
            <div className="div-grey-post"></div>
        </div>

    )
}

