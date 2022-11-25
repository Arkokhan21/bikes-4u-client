import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {

    // get all users from database -
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users?')
            .then(res => res.json())
    })

    return (
        <div>
            <h2 className='text-2xl mb-6'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => user.accountType === 'Seller' &&
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.accountType}</td>
                                    <td><button className="btn btn-xs btn-error">Remove</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;