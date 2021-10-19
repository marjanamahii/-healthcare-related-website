import React from 'react';

const Contact = () => {
    return (
        <section id="contactUs" className="py-4 py-lg-5 position-relative">
            <h3 className="position-absolute top-0 w-100 section-title fw-500 text-center text-uppercase text-white">
                <span>Contact</span>
            </h3>
            <div className="container py-4 py-lg-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="position-relative fs-35 fw-400 mb-5">
                            <span className="title-border mb-2 mb-lg-4 mt-0"></span>
                            <span>Get In Touch</span>
                        </h2>
                    </div>
                    <div className="col-md-7 mb-4 mb-md-0">
                        <div className="card card-body p-4">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form id="contact_us">
                                        <input type='hidden' name='csrfmiddlewaretoken' value='80kY54Wb9Ij5lw6yE60XMuGIIMK5uZXDCPKpcGcw9akR39mLWOB1P7ZFMMdvN12w' />
                                        <div className="contact-body">
                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label>Your Name</label>
                                                    <input name="name" className="form-control" type="text" placeholder="Enter Your name"
                                                        required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label>Your email</label>
                                                    <input name="email" className="form-control" type="email" placeholder="Enter Your email"
                                                        required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label>Phone Number</label>
                                                    <input className="form-control" type="text" name="phone"
                                                        placeholder="Enter Your Phone number"
                                                        required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label>Your Subject</label>
                                                    <input name="subject" className="form-control" type="text"
                                                        placeholder="Enter Your Subject" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label>Your Message</label>
                                                    <textarea name="message" className="form-control" rows="5"
                                                        placeholder="Enter Your Message Here.."></textarea>
                                                </div>
                                            </div>
                                            <div className="flexbox">
                                                <div className="custom-control custom-checkbox">
                                                    <input name="check" type="checkbox" className="custom-control-input" checked />
                                                    <label className="custom-control-label">Send me a copy</label>
                                                </div>
                                                <button className="btn btn-bold btn-w-xl btn-gradient">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card h-100 card-body bg-gradient p-4">
                            <div className="panel panel-default text-white">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-white fw-400">What's Next?</h3>
                                </div>
                                <div className="panel-body">
                                    <h4 className="text-white fw-400">1. STEP – Proposal</h4>
                                    <p>Once we receive your inquiry, we will send you high-level proposal that will give you
                                        an overview of our services and processes</p>
                                    <h4 className="text-white fw-400">2. STEP – Introduction call</h4>
                                    <p>We will schedule a meeting in order to get better understanding of your requirements
                                        and explain our delivery process</p>
                                    <h4 className="text-white fw-400">3. STEP – Let’s Roll!</h4>
                                    <p>Once the onboarding is completed, we can immediately start growing your follower base
                                        and engagement or simply help you with your digital needs</p>

                                    <p>We would like to hear your feedback so send us an email or reach out via our social
                                        media accounts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;