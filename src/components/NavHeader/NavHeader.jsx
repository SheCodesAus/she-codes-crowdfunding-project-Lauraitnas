import React from "react";
import { Link, useNavigate, Router } from "react-router-dom";

import Forest from "../../images/Forest.png"


import "./NavHeader.css"



function NavHeader() {

    const navigate = useNavigate();


    const reloadPage = () => {
        // window.location.reload()
        navigate("/login/")
    }

    const handleSignOut = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username")
        reloadPage()
    }

    //check if user has token and change nav
    const checkUser = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        console.log("isuserloggedin", isUserLoggedIn)
        return isUserLoggedIn ? <button  onClick={handleSignOut}>Sign out</button> : <button onClick={reloadPage}>Login</button>
    }

    
    
    return(
        <nav className="navHeader">
            <Link to="/">Create Account</Link>
            <Link to="/"><img className="logo" src={Forest}/></Link>
            {checkUser()}
        </nav>
    )
}

export default NavHeader;