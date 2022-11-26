import React from 'react';

const AdvertiseProductDetails = ({ addedBike, setBikeForBuy }) => {

    const { useTime, conditionType, resalePrice, photoUrl, category, bikeName } = addedBike;

    return (
        <div className="card w-96 h-[550px] bg-gray-200 shadow-xl my-10">
            <figure><img src={photoUrl} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bikeName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Up to 10% Off Plus free shipping!</p>
                <h2 className="">Brand: {category}</h2>
                <h2 className="">Price: {resalePrice} BDT</h2>
                <h2 className="">Years/Months of use: {useTime}</h2>
                <h2 className="">Conditon: {conditionType}</h2>

                <div className="card-actions justify-end">
                    <label onClick={() => setBikeForBuy(addedBike)} htmlFor="submit-modal" className="btn btn-active btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProductDetails;