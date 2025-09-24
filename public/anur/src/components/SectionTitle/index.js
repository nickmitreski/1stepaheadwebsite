import React from 'react'


const SectionTitle = (props) => {
    return(
        <div className="row">
            <div className="col col-xs-12">
                <div className="section-title-s4">
                    <span>{props.subTitle}</span>
                    <h2>{props.MainTitle}</h2>
                    <div className="transparent-text">{props.vTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;