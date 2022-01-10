
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import useFirebase from '../hooks/useFirebase';


const Header = () => {
    const { user, handleLogout } = useFirebase();



    return (
        <div>



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="text-danger">Laptop<span className="text-warning">Plaza</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/explore">Explore</Nav.Link>
                            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>

                            {user.email &&
                                <li className="nav-item ">
                                    <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                                </li>
                            }
                            {/* <Nav.Link href="/myOrders">My Orders</Nav.Link>
                            <Nav.Link href="/add">Add Services</Nav.Link> */}

                        </Nav>

                        {/* <Nav>
                            {
                                <Nav.Link href="/register">Register</Nav.Link>
                            }
                        </Nav> */}
                        <Nav>

                            {
                                user.displayName ?
                                    <div><span className="text-warning">{user.displayName}</span><button onClick={handleLogout}>Sign Out</button> </div> :

                                    <Nav> <Nav.Link href="/register">Register</Nav.Link>
                                        <Nav.Link href="/login">Log In</Nav.Link></Nav>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};


export default Header;