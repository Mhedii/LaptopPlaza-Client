import './App.css';
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from './Registration/Registration';
import FooterPage from './Footer/FooterPage';
import Header from './Header/Header';
import Login from './Login/Login';
import Services from './Services/Services';
import AddServices from './Admin/AddServices';
import Dashboard from './DashBoard/Dashboard';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import NotFound from './NotFound/NotFound';
import Purchase from './Purchase/Purchase';
import MyOrders from './myOrders/MyOrders';
import ManageOrder from './ManageOrder/ManageOrder';
import ManageProduct from './ManageProducts/ManageProducts';
import Review from './DashBoard/Review';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Pay from './Pay/Pay';
import ReviewForm from './DashBoard/Review/ReviewForm';
import ContactUs from './Home/ContactUs';
import ProtectedRoute from './Route/ProtectedRoute';
import AdminRoute from './Route/AdminRoute';
// import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/explore" element={<Services />} />
          <Route path="/add" element={<AddServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="/dashboard/addService" element={<AdminRoute><AddServices /></AdminRoute>} ></Route>
            <Route path="/dashboard/allOrder" element={<AdminRoute><ManageOrder /></AdminRoute>} ></Route>
            <Route path="/dashboard/myOrder" element={<MyOrders />} ></Route>
            <Route path="/dashboard/allProducts" element={<AdminRoute><ManageProduct /></AdminRoute>} ></Route>
            <Route path="/dashboard/reviews" element={<ReviewForm />} ></Route>
            <Route path="/dashboard/review" element={<Review />} ></Route>
            <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} ></Route>
            <Route path='/dashboard/payment' element={<Pay />}></Route>
          </Route>
          <Route path="/purchasing/:serviceId" element={<ProtectedRoute><Purchase /></ProtectedRoute>} />
          {/* <Route path="//purchasing/:serviceId" element={<PrivateRoute><Purchase /></PrivateRoute>} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/myOrder" element={<MyOrders />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


      <FooterPage></FooterPage>





    </div>
  );
}

export default App;
