import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../api/portfolio'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-3.png'

const PortfolioGridS2 =() => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'}/> 
            <div className="wpo-protfolio-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-container gallery-fancybox masonry-gallery row">
                                {Portfolio.slice(1,10).map((portfolio, pot) => (
                                    <div className="col-lg-4 col-md-6 col-12 custom-grid" key={pot}>
                                        <div className="">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src={portfolio.pImg} alt=""/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>{portfolio.cTitle}</h2>
                                                    <span>Illustration . Art Direction</span>
                                                    <Link onClick={ClickHandler} to={`/portfolio-single/${portfolio.Id}`}>View Work</Link>
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
export default PortfolioGridS2;

