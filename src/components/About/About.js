import React from 'react';

const About = () => {
    return (
        <section class="position-relative">
            <h3 class="position-absolute top-0 w-100 section-title fw-500 text-center text-uppercase text-white">
                <span>About Us</span>
            </h3>
            <div class="container py-4 py-lg-5">
                <div class="row align-items-center pb-lg-5">
                    <div class="col-12 text-center">
                        <h2 class="position-relative fs-35 fw-400 mb-5">
                            <span class="title-border mb-2 mb-lg-4 mt-0"></span>
                            <span>Who We Are</span>
                        </h2>
                    </div>
                    <div class="col-md-6 text-center">
                        <figure class="position-relative d-flex align-items-center justify-content-center shadow-3 mb-4 mb-md-0">
                            <img src="https://mponics.com/static/assets/img/services/story.jpg" alt="Our Story" />

                        </figure>
                    </div>
                    <div class="col-md-6 fs-19 lh-15">
                        <p>Square Health is a healthcare services aggregator aiming to digitalize healthcare services. Square Health has launched its flagship service, Jotno; a one-stop destination for caregivers and patients.</p>
                        <p>It is our core belief that healthcare should be readily accessible by the millions of people residing in Bangladesh. With the use of technology, we aim to do just that; connect and bridge caregivers and the patients so that the people can live better and healthier lives.</p>
                        <p>We understand that patient care starts with the caregivers. It is thus imperative that the caregivers operate at the cutting edge of technology so that they can spend more time on the patients and make their practice/institution more professional. In order to address that, we have launched Jotno Expert; a platform for doctors to manage their appointments and write prescriptions digitally. The data is backed up in real-time, encrypted and safely stored away on the cloud; saving the caregiver the hassle of dealing with storage of files and folders and never losing patient histories again.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;