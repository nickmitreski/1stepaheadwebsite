import React, { Fragment, Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../api/portfolio'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-3.png'

class PortfolioSlide extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }


        return (
            <Fragment>
                <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
                <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />
                <div className="protfolio-slide-area section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-md-12">
                                <div className="gallery-active owl-carousel row">
                                    <Slider {...settings}>
                                        {Portfolio.slice(14, 17).map((portfolio, pot) => (
                                            <div className="protfolio-wrapper" key={pot}>
                                                <div className="wpo-protfolio-single">
                                                    <div className="wpo-protfolio-img">
                                                        <img src={portfolio.pImg} alt="" />
                                                    </div>
                                                    <div className="wpo-protfolio-text">
                                                        <h2>{portfolio.cTitle}</h2>
                                                        <span>WordPress . Blog</span>
                                                        <Link onClick={ClickHandler} to={`/portfolio-single/${portfolio.Id}`}>View  Full Work</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }
}

export default PortfolioSlide;

