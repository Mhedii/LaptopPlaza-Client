import React from 'react';
import { Card, CardGroup, Carousel, } from 'react-bootstrap';
import Review from '../DashBoard/Review';
import SeeReview from '../DashBoard/SeeReview';
import FooterPage from '../Footer/FooterPage';
import "../Header/Header";
import FirstPageService from '../Services/FirstPageService';
import Services from '../Services/Services';
import Banner2 from './Banner2';
const Home = () => {

    return (
        <div>


            {/* Banner */}
            {/* <Banner2></Banner2> */}
            <div>
                <Carousel >
                    <Carousel.Item className="text-primary w-100 image-fluid">
                        <img
                            className="d-block w-100"
                            src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/megus/magus-laptop-pastel-violet-500x500.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-danger">
                            <h3>Avita Magus Celeron N3350</h3>
                            <p>Give you gaming experinence</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/fx506lh/fx506lh-1-500x500.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Asus TUF Gaming F15</h3>
                            <p>One of the finest product of Asus</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-5/aspire-5-001-500x500.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Acer Aspire 5</h3>
                            <p>Low cost better service</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <FirstPageService></FirstPageService>
            <div>

                <SeeReview></SeeReview>

            </div>
            <div className="m-5 p-5">
                <h1>Best 3 products in this month</h1>
                <div>


                    <CardGroup className="p-5">
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/avita/megus/magus-laptop-pastel-violet-500x500.jpg" />
                            <Card.Body>
                                <Card.Title>Avita Magus Celeron N3350</Card.Title>
                                <Card.Text>
                                    Save up to 25%
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/fx506lh/fx506lh-1-500x500.jpg" />
                            <Card.Body>
                                <Card.Title>Asus TUF Gaming F15 </Card.Title>
                                <Card.Text>
                                    Save up to 35%
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-5/aspire-5-001-500x500.jpg" />
                            <Card.Body >
                                <Card.Title>Acer Aspire 5</Card.Title>
                                <Card.Text>
                                    Save up to 15%
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </div>
            </div>

        </div>
    );
};


export default Home;