import React from "react";
import { Link, Router } from "react-router-dom";

import "./Nav.css"

function Nav() {
    
    return(
        <nav>
            <Link to="/">How to support</Link>
            <Link to="/">Home</Link>
            <Link to="/projects/">Start supporting</Link>
        </nav>
    );
}

export default Nav;