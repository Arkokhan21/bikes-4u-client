import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    // load data by specific user email - 
    const url = `https://bikes-4u-server.vercel.app/bikeorders?email=${user?.email}`

    const { data: bikeorders = [], isLoading } = useQuery({
        queryKey: ['bikeorders', user?.email],
        queryFn: () => fetch(url, {
            // send token to the server - 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <h2 className='text-2xl mb-6 font-bold'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Buyer Name</th>
                            <th>Phone</th>
                            <th>Meet Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikeorders?.map((bikeorder, index) =>
                                <tr key={bikeorder._id}>
                                    <th>{index + 1}</th>
                                    <td>{bikeorder.bike}</td>
                                    <td>{bikeorder.price}</td>
                                    <td>{bikeorder.buyer}</td>
                                    <td>{bikeorder.phone}</td>
                                    <td>{bikeorder.location}</td>
                                    <td>
                                        {
                                            bikeorder.price && !bikeorder.paid &&
                                            <Link to={`/dashboard/payment/${bikeorder._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            bikeorder.price && bikeorder.paid &&
                                            <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;