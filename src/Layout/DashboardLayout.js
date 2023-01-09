import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)

    // get hooks from Custom hook (useAdmin/Buyer/Seller) -
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer && <li><Link to='/dashboard/myorders' className='font-bold hover:bg-sky-100'>My Orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct' className='font-bold hover:bg-sky-100'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproduct' className='font-bold hover:bg-sky-100 mt-2'>My Product</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allbuyers' className='font-bold hover:bg-sky-100'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allsellers' className='font-bold hover:bg-sky-100 mt-2'>All Sellers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;