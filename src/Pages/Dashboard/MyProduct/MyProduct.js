import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {

    const [deletingProducts, setDeletingProducts] = useState(null)

    const closeModal = () => {
        return setDeletingProducts(null)
    }

    const { user } = useContext(AuthContext)

    // load data by specific user email - 
    const url = `http://localhost:5000/addedbikes?email=${user?.email}`

    const { data: addedBikes = [], isLoading, refetch } = useQuery({
        queryKey: ['addedbikes', user?.email],
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

    // delete addedbikes from database - 
    const handleDeleteProduct = (addedBike) => {
        fetch(`http://localhost:5000/addedbikes/${addedBike._id}`, {
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
        <div>
            <h2 className='text-2xl mb-6'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Seller Name</th>
                            <th>Phone</th>
                            <th>Meet Location</th>
                            <th>Remove</th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedBikes?.map((addedBike) =>
                                <tr key={addedBike._id}>
                                    <td>{addedBike.bikeName}</td>
                                    <td>{addedBike.price}</td>
                                    <td>{addedBike.sellerName}</td>
                                    <td>{addedBike.phone}</td>
                                    <td>{addedBike.location}</td>
                                    <td>
                                        <label onClick={() => setDeletingProducts(addedBike)}
                                            htmlFor="confirmation-modal" className="btn btn-sm btn-error">Remove</label>
                                    </td>

                                    <td><button className='btn btn-primary btn-sm'></button></td>

                                    <td><button className="btn btn-xs btn-primary">Advertise</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProducts && <ConfirmationModal
                    title={'Are you sure you want to delete?'}
                    message={`If you delete this, It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    modalData={deletingProducts}
                    successButton='Delete'
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;