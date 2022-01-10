import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const ProtectedRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    let location = useLocation()
    if (isLoading) { return <Spinner animation="border" /> }
    if (user?.email) {
        return (
            children
        );

    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default ProtectedRoute;