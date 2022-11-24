import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesOption = ({ category }) => {

    const { category_name, category_img, _id } = category

    return (
        <div className="card w-96 h-96 bg-gray-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={category_img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <div className="card-actions">
                    <Link to={`/categories/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesOption;