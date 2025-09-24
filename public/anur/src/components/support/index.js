import React from 'react'
import { Link } from 'react-router-dom'

const Support = (props) => {
    return(
        <section className="wpo-support-section section-padding">
            <div className="container">
                <div className="wpo-support-wrap">
                    <div className="wpo-support-item-left">
                        <h3>Have a defferent question?</h3>
                        <p>There are many variations of passages of Lorem Ipsum 
                            available, but the majority have suffered alteration.</p>
                    </div>
                    <div className="wpo-support-item-right">
                        <Link to="/contact" className="theme-btn">Submit a Ticket</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;