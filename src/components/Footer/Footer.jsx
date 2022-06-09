import React from "react";
import { Link, Router } from "react-router-dom";

import "./Footer.css"

import Forest from "../../images/Forest-white.png"


function Footer() {
    
    return(
        <footer className="footer-container">
            <div><Link to="/"><img className="footer-logo" src={Forest}/></Link></div>
            <div>
            <div><Link to="/contact-us/" className="nav-button">Get in touch with us</Link></div>
            </div>

        </footer>
    );
}

export default Footer;