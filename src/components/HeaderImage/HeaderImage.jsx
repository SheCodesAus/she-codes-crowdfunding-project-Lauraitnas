import React from "react";
import { Link, Router } from "react-router-dom";

import "./HeaderImage.css"

import Protect from "../../images/We-protect.png"
import Plant from "../../images/We-plant.png"
import Restore from "../../images/We-restore.png"




function HeaderImage() {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click",() => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length -1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })
    
    return(
        
        <section aria-label="categories">
            <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                <button className="carousel-button next" data-carousel-button="next">&#8658;</button>

                <ul data-slides>
                    <li className="slide" data-active>
                        <Link to="/"><img className="header-image" src={Protect}/></Link>
                    </li>
                    <li className="slide"> 
                        <Link to="/"><img className="header-image" src={Plant}/></Link>
                    </li>
                    <li className="slide">
                        <Link to="/"><img className="header-image" src={Restore}/></Link>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default HeaderImage;