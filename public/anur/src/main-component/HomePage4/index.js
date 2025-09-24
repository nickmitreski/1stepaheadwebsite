import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero4 from '../../components/hero4';
import Features from '../../components/Features';
import About2 from '../../components/about2';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/Projects';
import Testimonial from '../../components/Testimonial';
import ContactHome from '../../components/ContactHome';
import Support from '../../components/support';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-2.png'


const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-4'}/>
            <Hero4/>
            <Features/>
            <About2/>
            <ServiceSection/>
            <FunFact/>
            <ProjectSection/>
            <Testimonial/>
            <ContactHome/>
            <Support/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage4;