import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../api/portfolio'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-3.png'

const PortfolioGridS3 =() => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'}/> 
            <div className="wpo-protfolio-area-3 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-container gallery-fancybox masonry-gallery row">
                                {Portfolio.slice(10,14).map((portfolio, pot) => (
                                    <div className="col-lg-6 col-md-6 col-12 custom-grid" key={pot}>
                                        <div className="protfolio-l">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src={portfolio.pImg} alt=""/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2><Link onClick={ClickHandler} to={`/portfolio-single/${portfolio.Id}`}>{portfolio.cTitle}</Link></h2>
                                                    <span>Illustration . Art Direction</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioGridS3;

