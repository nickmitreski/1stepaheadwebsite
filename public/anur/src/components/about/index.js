import React from 'react'
import abimg from '../../images/about.jpg'
import { Link } from 'react-router-dom'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={abimg} alt=""/>
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <span className="ab-btn">7 Years Experience</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>ABOUT US</span>
                                <h2>We are more than just a
                                    <span>digital agency.</span>
                                </h2>
                                <div className="transparent-text">About</div>
                            </div>
                            <p>We create award-winning websites, remarkable brands and cutting-edge apps. Nullam
                                imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh. </p>
                            <ul>
                                <li><i className="ti-plus"></i> Quis ipsum suspendisse ultrices gravida. </li>
                                <li><i className="ti-plus"></i> Risus commodo viverra maecenas accumsan lacus.</li>
                                <li><i className="ti-plus"></i> Incididunt ut labore et dolore magna aliqua. </li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/portfolio-grid">View Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;