import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/slider/slide3.jpg'




const Hero4 =() => {
    return (
        <section className="wpo-hero-section-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>We’re a full-range design agency.</h2>
                            </div>
                            <div className="btns">
                                <Link className="theme-btn-s2" to="/about">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <img src={himg} alt=""/>
                </div>
            </div>
        </section>
    )
}



export default Hero4;