import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;

};

export default PrivateRoute;