import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'


class Testimonial extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 2,
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

        const testimonial = [
            {
                tsImg: ts1,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'Elizabeth Anne',
                Sub: "Fasion Designer",
            },
            {
                tsImg: ts2,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'Sara Watson',
                Sub: "UX?UI Designer",
            },
            {
                tsImg: ts3,
                Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  randomised.",
                Title: 'David Miller',
                Sub: "CEO & Founder",
            }
        ]
        return (
            <section className="wpo-testimonials-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-12">
                            <div className="testimonials-left">
                                <span>TEstimonial</span>
                                <h3>What People Says</h3>
                                <p>We met years ago at an advertising agency where we learned a ton of dos and some don’ts.</p>
                                <a href="contact.html" className="theme-btn">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="testimonials-wrapper owl-carousel">
                                <Slider {...settings}>
                                    {testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonials-item" key={tsm}>
                                            <div className="testimonials-item-top">
                                                <p>{tesmnl.Des}</p>
                                            </div>
                                            <div className="testimonials-item-bottom">
                                                <div className="testimonials-item-bottom-author">
                                                    <img src={tesmnl.tsImg} alt=""/>
                                                </div>
                                                <div className="testimonials-item-bottom-author-text">
                                                    <h3>{tesmnl.Title}</h3>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;