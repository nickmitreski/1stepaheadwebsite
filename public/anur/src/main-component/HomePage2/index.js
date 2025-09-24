import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2';
import Features from '../../components/Features';
import About from '../../components/about';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/Projects';
import Testimonial from '../../components/Testimonial';
import Support from '../../components/support';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-3.png'


const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <Hero2/>
            <Features wClass={'wpo-work-section-s2'}/>
            <About/>
            <ServiceSection sClass={'wpo-service-section-s2'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <ProjectSection/>
            <Testimonial/>
            <Support/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;