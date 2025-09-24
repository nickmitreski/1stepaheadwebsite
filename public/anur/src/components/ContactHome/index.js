import React, { Component } from 'react'
import cimg from '../../images/contact.png'


class ContactHome extends Component {


    state = {
        name: '',
        email: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        
        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            error } = this.state;

        return(

            <section className="wpo-contact-section section-padding">
                <div className="container">
                    <div className="wpo-contact-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="contact-form">
                                    <div className="contact-form-title">
                                        <h2>Contact Us</h2>
                                        <p>Reach out to us for any kind of inquiry.</p>
                                    </div>
                                    <form onSubmit={this.subimtHandler} className="form">
                                        <div className="form-field">
                                            <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Your Name"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                        <div className="form-field">
                                            <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Your Email"/>
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                        <textarea className="form-control" placeholder="Massege"></textarea>
                                        <button className="theme-btn" type="submit">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-img">
                                    <img src={cimg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  ContactHome;