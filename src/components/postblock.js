import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
const styles = {
    height: "100vh"
};

export default function PostBlock(props) {
    return(
            <div className="div-block-9">
            <div className="div-block-10" style={{ backgroundImage: `url(${props.background})` }}></div>
                <div className="div-block-12">
                <h1 className="heading-blog-post">{props.name}</h1>
                    <div>{props.text}</div>
                    <div className="div-block-11">
                        <div>Nivel: </div>
                        <div>{props.nivel}</div>
                    </div>
                </div>
            </div>
        
    ) 
}