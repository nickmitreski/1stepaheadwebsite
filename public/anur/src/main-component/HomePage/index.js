import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero';
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
import Logo from '../../images/logo.png'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-1'}/>
            <Hero/>
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
export default HomePage;