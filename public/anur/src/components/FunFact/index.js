import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '82',
            subTitle: 'Successful Projects',
        },
        {
            title: '45',
            subTitle: 'Satisfied Clients',
        },
        {
            title: '15',
            subTitle: 'Years of Experience',
        },
        {
            title: '37',
            subTitle: 'Award Winning',
        },


    ]

    return (

        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;