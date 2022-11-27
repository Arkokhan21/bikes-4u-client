import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const AddProduct = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, } = useForm();

    const navigate = useNavigate()

    const handleAddProduct = (data) => {

        const sellerEmail = user?.email || 'undefined'
        const sellerName = user?.displayName || 'undefined'

        const addedBikeDetails = {
            sellerName,
            sellerEmail,
            bikeName: data.bikeName,
            category: data.category,
            photoUrl: data.photoUrl,
            resalePrice: data.price,
            conditionType: data.conditionType,
            phone: data.phone,
            location: data.location,
            useTime: data.useTime,
            description: data.description
        }

        // post added bike details in the database - 
        fetch('http://localhost:5000/addedbikes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addedBikeDetails)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Added successful')
                navigate('/dashboard/myproduct')
            })
    }

    return (
        <div className='ml-10 mt-10 mb-6'>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <h2 className='text-2xl font-bold my-3'>Add Your Bike</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    <input {...register("bikeName", {})} type="text" placeholder="bike name" className="input input-bordered input-lg w-full" required />
                    <input {...register("category", {})} type="text" placeholder="brand name" className="input input-bordered input-lg w-full" required />
                    <input {...register("photoUrl", {})} type="text" placeholder="bike photoUrl" className="input input-bordered input-lg w-full" required />
                    <input {...register("price", {})} type="text" placeholder="price" className="input input-bordered input-lg w-full" required />
                    <input {...register("conditionType", {})} type="text" placeholder="condition type(excellent, good, fair)" className="input input-bordered input-lg w-full" required />
                    <input {...register("phone", {})} type="text" placeholder="phone" className="input input-bordered input-lg w-full" required />
                    <input {...register("location", {})} type="text" placeholder="meet location" className="input input-bordered input-lg w-full" required />
                    <input {...register("useTime", {})} type="text" placeholder="year of purchase " className="input input-bordered input-lg w-full" required />
                </div>
                <textarea {...register("description", {})} className="textarea textarea-bordered h-28 w-full mt-5" placeholder="description"></textarea>
                <input className="btn btn-active btn-primary text-white mt-5" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;