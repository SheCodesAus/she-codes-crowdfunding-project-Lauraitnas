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
        return isUserLoggedIn ? <button className="nav-button" onClick={handleSignOut}>Sign out</button> : <button className="nav-button" onClick={reloadPage}>Login</button>
    }

    const checkProfile = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        return !isUserLoggedIn ? <div className="nav-button"><Link to="/users/register">Create account</Link></div> : <div className="nav-button"><Link to="/users/{id}">My Profile</Link></div>
    }

    
    
    return(
        <nav className="navHeader">
            <div>{checkProfile()}</div>
            <div><Link to="/"><img className="logo" src={Forest}/></Link></div>
            <div>{checkUser()}</div>
        </nav>
    )
}

export default NavHeader;