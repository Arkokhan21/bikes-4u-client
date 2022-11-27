import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();

    return (
        <section className="flex items-center h-full sm:p-16 text-gray-500">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1669486884~exp=1669487484~hmac=d516f50fa71f93a77721caea4019ae7f9acbc8c4c6aba875919ba4ffbb37dc9e" alt="" />
                <p className="mb-4 text-3xl font-bold text-red-500">{error.statusText || error.message}</p>
                <p className="text-2xl">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link to='/'>
                    <button className='mt-10 btn btn-active btn-primary text-white'>Back to Homepage</button>
                </Link>
            </div>
        </section>
    );
};

export default Error;