import React from "react";
import { Link, Router } from "react-router-dom";

import "./Nav.css"

function Nav() {
    
    return(
        <nav className="main-nav">
            <Link to="/projects/">Start supporting</Link>
            <Link to="/">Home</Link>
            <Link to="/contact-us/">Contact</Link>
        </nav>
    );
}

export default Nav;