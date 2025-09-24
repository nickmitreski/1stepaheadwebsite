import React from 'react'
import SectionTitle from '../SectionTitle'

import fIcon1 from '../../images/work/1.png'
import fIcon2 from '../../images/work/2.png'
import fIcon3 from '../../images/work/3.png'
import fIcon4 from '../../images/work/4.png'


const Features = (props) => {

     const featres = [
         {
            id:'1',
            fIcon:fIcon1,
            title:'Creating a Concept',
         },
         {
            id:'2',
            fIcon:fIcon2,
            title:'Budget Planning',   
         },
         {
            id:'3',
            fIcon:fIcon3,
            title:'Design Process',    
         },
         {
            id:'4',
            fIcon:fIcon4,
            title:'Building Your Dream',    
         },
         
     ]


    return(
        <section className={`wpo-work-section section-padding ${props.wClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Working Process'} MainTitle={'How We Do Our Work Plan'} vTitle={'Work'}/>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={fitem}> 
                                <div className="wpo-work-iem">
                                    <div className="wpo-work-icon-wrap">
                                        <div className="wpo-work-icon">
                                            <img src={featres.fIcon} alt=""/>
                                        </div>
                                        <div className="wpo-work-icon-thumb">
                                            <span>{featres.id}</span>
                                        </div>
                                    </div>
                                    <div className="wpo-work-text">
                                        <h4>{featres.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;