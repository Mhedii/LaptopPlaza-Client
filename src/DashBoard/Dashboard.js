import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useMatch } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "../Admin/AddServices";
import Review from "./Review";
import Pay from "../Pay/Pay";
import MyOrders from "../myOrders/MyOrders";
import useFirebase from "../hooks/useFirebase";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProducts/ManageProducts";
// import ManageServices from "../ManageServices/ManageServices";

const Dashboard = () => {
    let { path, url } = useMatch();
    const { user } = useFirebase();
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setisAdmin(true);
                } else {
                    setisAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);
    //`Manage All Orders`, `Add A Product`, `Make Admin`, `Manage Products` `Logout`
    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            {!isAdmin && (
                                <Link to={`${url}/payment`}>
                                    <li className="dashboard-menu mt-5">Pay</li>
                                </Link>

                            )}
                            {!isAdmin && (
                                <Link to={`${url}/myOrder`}>
                                    <li className="dashboard-menu mt-5">Order list</li>
                                </Link>

                            )}
                            {!isAdmin && (
                                <Link to={`${url}/review`}>
                                    <li className="dashboard-menu mt-5">Review</li>
                                </Link>

                            )}
                            {/* <Link to={`${url}/payment`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link>

                            <Link to={`${url}/myOrder`}>
                                <li className="dashboard-menu mt-5">Order list</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link> */}
                            <div className="admin-dashboard">
                                {/* <li className="dashboard-menu mt-5">Orders list</li> */}

                                {isAdmin && (
                                    <Link to={`${url}/addService`}>
                                        <li className="dashboard-menu">Add Service</li>
                                    </Link>

                                )}
                                {isAdmin && (
                                    <Link to={`${url}/allOrder`}>
                                        <li className="dashboard-menu">Manage Order</li>
                                    </Link>


                                )}
                                {isAdmin && (
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>

                                )}
                                {isAdmin && (
                                    <Link to={`${url}/allProducts`}>
                                        <li className="dashboard-menu">Manage Products</li>
                                    </Link>

                                )}

                                {/* <Link to={`${url}/allOrder`}>
                                    <li className="dashboard-menu">Manage Order</li>
                                </Link>
                                <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu">Make Admin</li>
                                </Link>
                                <Link to={`${url}/manageServices`}>
                                    <li className="dashboard-menu">Manage Service</li>
                                </Link> */}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Routes>
                            <Route path={`${path}/review`} element={<Review />} />
                            <Route path={`${path}/myOrder`} element={<MyOrders />} />
                            <Route path={`${path}/payment`} element={<Pay />} />
                            <Route path={`${path}/makeAdmin`} element={<MakeAdmin />} />
                            <Route path={`${path}/addService`} element={<AddServices />} />
                            <Route path={`${path}/allOrder`} element={<ManageOrder />} />
                            <Route path={`${path}/allProducts`} element={<ManageProduct />} />
                        </Routes>

                        {/* <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route> */}


                        {/* <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route> */}

                        {/* </Route>
                            <Route exact path={`${path}/OrderList`}>
                                <MyOrders></MyOrders>
                            </Route> */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
