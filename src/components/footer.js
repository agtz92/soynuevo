import React from "react"
import { Link } from "gatsby"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import logoChico from "../images/logo_small.png"

export default function Footer() {
    
    return(
        <footer id="footer" className="footer">
            <div className="container w-container">
                <div className="footer-flex-container">
                <Link to="/"><img
                    loading="lazy"
                    width="50"
                    srcSet={logoChico}
                    sizes="50px"
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                    <div>
                    <h2 className="footer-heading">Heading Label</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/"  to="/" className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Heading Label</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Heading Label</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                        <li ><Link  to="/"  className="footer-link">Text Link</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="text-bottom-footer">Copyright © 2020 My Company. All rights reserved.</div>
                </div>
        </footer>
    );
    
    }

