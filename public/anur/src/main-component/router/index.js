import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import AboutPage from '../AboutPage'
import PortfolioGrid from '../PortfolioGrid'
import PortfolioGridS2 from '../PortfolioGridS2'
import PortfolioGridS3 from '../PortfolioGridS3'
import PortfolioSlide from '../PortfolioSlide'
import PortfolioSinglePage from '../PortfolioSinglePage'
import ServicePage from '../ServicePage'
import ServiceSinglePage from '../ServiceSinglePage'
import ProjectSinglePage from '../ProjectSinglePage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='home' element={<Homepage/>} />
          <Route path='home2' element={<Homepage2/>} />
          <Route path='home3' element={<Homepage3/>} />
          <Route path='home4' element={<Homepage4/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='portfolio-grid' element={<PortfolioGrid/>} />
          <Route path='portfolio-grid-s2' element={<PortfolioGridS2/>} />
          <Route path='portfolio-grid-s3' element={<PortfolioGridS3/>} />
          <Route path='portfolio-slide' element={<PortfolioSlide/>} />
          <Route path='portfolio-single/:id' element={<PortfolioSinglePage/>} />
          <Route path='service' element={<ServicePage/>} />
          <Route path='service-single/:id' element={<ServiceSinglePage/>} />
          <Route path='project-single/:id' element={<ProjectSinglePage/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='404' element={<ErrorPage/>} />
          <Route path='blog-single/:id' element={<BlogDetails/>} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='register' element={<SignUpPage/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
