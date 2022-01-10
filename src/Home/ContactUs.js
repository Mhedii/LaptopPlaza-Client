import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Contactus.css';

const ContactUs = () => {
    return (
        <>

            <div className="contact-us">
                <h3 className="heading">contact us</h3>
                <div className="container ">
                    <div className="row contact-content">
                        <div className="col-lg-6 col-md-12 contact-form">
                            <h3 className="sub-heading">DROP US A LINE</h3>
                            <FloatingLabel controlId="floatingInputGrid" label="Your Name" className="mb-3">
                                <Form.Control type="name" placeholder=" " />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInputGrid" label="Your Email" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInputGrid" label="Your Phone Number" className="mb-3">
                                <Form.Control type="hone" placeholder="  " />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Message" className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                />
                            </FloatingLabel>
                            <button type="submit" className="contact-btn">Send</button >
                        </div>
                        <div className="col-lg-6 col-md-12 contact-info">
                            <h3 className="sub-heading">CONTACT INFORMATION</h3>
                            <p><span>We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.</span></p>
                            <p><i className="fas fa-map-marker-alt" /><span className="ms-1">184 Main Rd E,BirUttom, Dhaka,Bangladesh</span></p>
                            <p><i className="fas fa-phone" /><span className="ms-1">Dhaka,Bangladesh / (+880) 1727755868</span></p>
                            <p><i className="fas fa-envelope" /><span className="ms-1">(+880) 1727755868</span></p>
                            <p><i className="far fa-clock" /><span className="ms-1">Everyday 9:00AM-10:00PM</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactUs;