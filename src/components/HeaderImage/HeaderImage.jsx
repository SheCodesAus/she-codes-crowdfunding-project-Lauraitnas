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
                        <Link to="/category/we_protect"><img className="header-image" src={Protect}/></Link>
                        <div className="category-div">
                            <h2 className="category-title">We Protect</h2>
                            <h4 className="category-txt">We save woods and trees from decimation. We stand against needles destruction and lead the fight against tree pests and desease.</h4>
                            <Link to="/category/we_protect"><button className="category-button">Protect</button></Link>
                        </div>
                    </li>
                    <li className="slide"> 
                        <Link to="/"><img className="header-image" src={Plant}/></Link>
                        <div className="category-div">
                            <h2 className="category-title">We Plant</h2>
                            <h4 className="category-txt">We plant woods and tress to combat climate change, build a greener future and create heavens for life.</h4>
                            <Link to="/category/we_plant"><button className="category-button">Plant</button></Link>
                        </div>
                    </li>
                    <li className="slide">
                        <Link to="/"><img className="header-image" src={Restore}/></Link>
                        <div className="category-div">
                            <h2 className="category-title">We Restore</h2>
                            <h4 className="category-txt">We bring damaged ancient wood back to life. We replace this irreplaceable ecosystems before they are lost forever.</h4>
                            <Link to="/category/we_restore"><button className="category-button">Restore</button></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default HeaderImage;