import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/service';
import SectionTitle from '../SectionTitle'


const ServiceSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (
        <section className={`wpo-service-section ${props.sClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Our Services'} MainTitle={'What Can We Offer'} vTitle={'Service'}/>
                <div className="row">
                    {Services.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12"  key={Sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <img src={service.icon} alt=""/>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                                <div className="visible-icon">
                                    <img src={service.icon2} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default ServiceSection;