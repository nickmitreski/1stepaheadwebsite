import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/slider/right-img3.png'
import simg1 from '../../images/slider/shape3.png'
import VideoModal from '../../components/ModalVideo'




const Hero3 =() => {
    return (
        <section className="wpo-hero-section-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Building Your Brands With <span>Purpose</span> and Passion</h2>
                            </div>
                            <p>Alone we can do so little; together we can do so much. Great things in business are never done by one person. </p>
                            <div className="btns">
                                <Link className="theme-btn" to="/about">Get Started</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Video
                                    </li>
                                </ul>
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
                <div className="inner-shape">
                    <img src={simg1} alt=""/>
                </div>
            </div>
        </section>
    )
}



export default Hero3;