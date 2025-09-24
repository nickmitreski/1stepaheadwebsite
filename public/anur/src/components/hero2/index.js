import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/slider/right-img2.png'

import simg1 from '../../images/slider/shape2.png'
import simg2 from '../../images/slider/shape1.png'




const Hero2 =() => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-8 col-lg-8">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span><img src={simg1} alt=""/></span>
                                <ul>
                                    <li>Unique</li>
                                    <li> Cool</li>
                                    <li> Awesome</li>
                                </ul>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Design Agency</h2>
                            </div>
                            <div className="btns">
                                <Link className="theme-btn-s2" to="/about">View Showcase</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-link">
                    <ul>
                        <li><Link to="/">Dribbble</Link></li>
                        <li><Link to="/">Behance</Link></li>
                    </ul>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <img src={himg} alt=""/>
                </div>
                <div className="shape-1">
                    <div className="inner-shape"><img src={simg2} alt=""/></div>
                </div>
            </div>
        </section>
    )
}



export default Hero2;