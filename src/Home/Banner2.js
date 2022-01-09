import React from 'react';
import { Link } from 'react-router-dom';
import './Banner2.css';
const Banner2 = () => {
    return (
        <div className="banner2">
            <div className="container">
                <div className="row">
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="product" alt="Home" className="single-banner">
                            <img src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/megus/magus-laptop-pastel-violet-500x500.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Avita Magus Celeron N3350</span>
                                <span className="item-amount">Save up to 25%</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="product" alt="Home" className="single-banner">
                            <img src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/fx506lh/fx506lh-1-500x500.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Asus TUF Gaming F15 </span>
                                <span className="item-amount">Save up to 35%</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>

                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="shop" className="single-banner">
                            <img src="https://i.ibb.co/d7TC5Xj/laptop-720x.jpg" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Dell XPS 2020</span>
                                <span className="item-amount text">Engineered to run on ultra-fast <br />networks.</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>

                        </Link>

                    </div>
                    <div className="single-col col-lg-6 col-md-12">
                        <Link to="shop" alt="Home" className="single-banner">
                            <img src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-5/aspire-5-001-500x500.jpg" className="w-50" alt="" />
                            <div className="item-disc">
                                <span className="item-title">Acer Aspire 5</span>
                                <span className="item-amount">Save up to 15%</span>
                                <span className="item-amount buy-now-btn "><Link to="/">Buy Now</Link></span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner2;