import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeDetails from './BikeDetails';
import SubmitModal from './SubmitModal';

const CategoriesDetails = () => {

    const [bikeForBuy, setBikeForBuy] = useState(null)

    const category = useLoaderData()

    const { bikes, category_name } = category

    return (
        <div>
            <h2 className='font-bold text-center text-2xl my-16'>Available {`${category_name}`} Bikes In Bikes 4U</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center'>
                {
                    bikes.map((bike, index) => <BikeDetails key={index} bike={bike} setBikeForBuy={setBikeForBuy}></BikeDetails>)
                }
            </div>
            {bikeForBuy &&
                <SubmitModal bikeForBuy={bikeForBuy} setBikeForBuy={setBikeForBuy}></SubmitModal>}
        </div>
    );
};

export default CategoriesDetails;