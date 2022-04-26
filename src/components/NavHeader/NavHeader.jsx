import React from "react";
import { Link, Router } from "react-router-dom";

// import Forest from "../images/Forest.png";


import "./NavHeader.css"

function NavHeader() {
    
    return(
        <nav className="navHeader">
            <Link to="/">Home</Link>
            {/* <Link to="/"><img className="logo" src={Forest}/></Link> */}
        </nav>
    )
}

export default NavHeader;