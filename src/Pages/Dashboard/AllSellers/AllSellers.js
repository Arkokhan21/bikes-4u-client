import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {


    const [deletingSellers, setDeletingSellers] = useState(null)

    const closeModal = () => {
        return setDeletingSellers(null)
    }

    // get all users from database -
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users?')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // / delete addedbikes from database - 
    const handleDeleteSeller = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Deleted Successful')
                }
            })
    }

    return (
        <div className='mt-10'>
            <h2 className='text-2xl mb-6 font-bold'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => user.accountType === 'Seller' &&
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.accountType}</td>
                                    <td>
                                        <label onClick={() => setDeletingSellers(user)}
                                            htmlFor="confirmation-modal" className="btn btn-sm btn-error">Remove</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSellers && <ConfirmationModal
                    title={'Are you sure you want to delete?'}
                    message={`If you delete this, It cannot be undone.`}
                    successAction={handleDeleteSeller}
                    modalData={deletingSellers}
                    successButton='Delete'
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;