import React, { useEffect, useState } from 'react';
import CategoriesOption from './CategoriesOption';

const Categories = () => {

    // get all categories from server - 
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <img className='h-28 w-full' src="https://www.svgrepo.com/show/259458/motorbike-motorcycle.svg" alt="" />
            <h2 className='font-bold text-center text-3xl my-10'>Browse Bikes By Brand</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-8 place-items-center'>
                {
                    categories.map(category => <CategoriesOption key={category._id} category={category}></CategoriesOption>)
                }
            </div>
        </>
    );
};

export default Categories;