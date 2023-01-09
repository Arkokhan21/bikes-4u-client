import React from 'react';
import { GoVerified } from "react-icons/go";

const BikeDetails = ({ bike, setBikeForBuy }) => {

    const { bikeName, sellerName, isVerified, location, img, originalPrice, resalePrice, useTime, postDate } = bike;

    return (
        <div className="card w-96 h-[600px] bg-gray-200 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bikeName}</h2>
                <h2>Seller Name: {sellerName} {isVerified === 'true' ? <GoVerified className='text-green-500 inline' /> : ''}</h2>
                <h2>From: {location}</h2>
                <h2>Original Price: {originalPrice} BDT</h2>
                <h2>Resale Price: {resalePrice} BDT</h2>
                <h2>Years/Months of use: {useTime}</h2>
                <h2>Post: {postDate}</h2>

                <div className="card-actions justify-end">
                    <label onClick={() => setBikeForBuy(bike)} htmlFor="submit-modal" className="btn btn-active btn-primary">Buy Now</label>
                </div>
            </div>
        </div >
    );
};

export default BikeDetails;