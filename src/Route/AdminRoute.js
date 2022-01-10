import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useFirebase();
    let location = useLocation()
    if (!admin || isLoading) { return <Spinner animation="border" /> }
    if (user?.email && admin) {
        return (
            children
        );

    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default AdminRoute;