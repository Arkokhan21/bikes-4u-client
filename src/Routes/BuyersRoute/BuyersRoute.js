import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../Pages/Shared/Loading/Loading';

const BuyersRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }

    if (isBuyer) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;

};

export default BuyersRoute;