import React from "react";
import "./Footer.css";


const FooterPage = () => {
    return (
        <div className="footer">
            <div className="container all-menu">
                <div className="row">
                    <div className="contect col-lg-3 col-md-6 col-12  order-lg-1 ">
                        <h3><i className="fas fa-headphones"></i><span className="ms-1">GOT QUESTIONS ?</span></h3>
                        <p>(+880) 1711227755</p>
                        <p>(+880) 1727755868</p>

                        <p><i className="fas fa-map-marker-alt"></i><span className="ms-1">184 Main Rd E,BirUttom<br />
                            Dhaka,Bangladesh</span></p>
                        <a href="mailto:contact@company.com"><i className="fas fa-envelope"></i><span className="ms-1">contact@LPlaza.com</span></a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  order-lg-1 ">

                        <ul className="menu">
                            <h3>Categories</h3>
                            <li className="menu-item">
                                <a href="/">NoteBook</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">LightWeight</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Gaming</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Official</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Denim</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  order-lg-1 ">

                        <ul className="menu">
                            <h3>Infomation</h3>
                            <li className="menu-item">

                                <a href="/about">About Us</a>



                            </li>
                            <li className="menu-item">
                                <a href="/contact">Contact Us</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Returns & Exchanges</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Shipping & Delivery</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  order-lg-1 ">

                        <ul className="menu">
                            <h3>Useful as</h3>
                            <li className="menu-item">
                                <a href="/storeLocation">Store Location</a>
                            </li>
                            <li className="menu-item">
                                <a href="/dashboard">My Account</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Latest News</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">Size Guide</a>
                            </li>
                            <li className="menu-item">
                                <a href="/">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12  order-lg-1 ">
                        <h3><i className="far fa-money-bill-alt"></i><span className="ms-1">GOT QUESTIONS ? WE ARE USING SAFE PAYMENTS</span></h3>
                        <li><img src="https://i.ibb.co/JnbCY6t/PROD1-500x.png" alt="payment" className="payment mb-2 mt-2" /></li>
                        <li><img src="https://i.ibb.co/fHWBpR7/payment.png" alt="Secured" className="secured mt-2" /></li>

                    </div>
                </div>

            </div>
            <div>
                <p className="copyright">Copyright © 2022  all rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterPage;
