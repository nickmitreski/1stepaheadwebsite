import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero3 from '../../components/hero3';
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


const HomePage3 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-3'}/>
            <Hero3/>
            <Features/>
            <About/>
            <ServiceSection/>
            <FunFact/>
            <ProjectSection/>
            <Testimonial/>
            <Support/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;