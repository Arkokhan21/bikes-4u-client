import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Pages/Shared/Loading/Loading';

const SellerRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;

};

export default SellerRoute;