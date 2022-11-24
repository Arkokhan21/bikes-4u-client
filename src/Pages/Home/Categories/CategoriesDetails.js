import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeDetails from './BikeDetails';

const CategoriesDetails = () => {

    const category = useLoaderData()

    const { bikes } = category

    return (
        <div>
            {
                bikes.map((bike, index) => <BikeDetails key={index} bike={bike}></BikeDetails>)
            }
        </div>
    );
};

export default CategoriesDetails;