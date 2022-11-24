import React from 'react';

const Banner = () => {
    return (
        <section className="p-4 lg:p-8 text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-700">
                        <h3 className="text-3xl font-bold">USED BIKES FOR SALE IN BANGLADESH</h3>
                        <p className="my-6 text-gray-300">Experience Bike Reviews, News, and Resale Motorcycle Price In Bangladesh At Bike4U.com</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-700">
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 text-gray-300">Bike4U.com also provides tips on motorcycle maintenance, motorcycle buying, riding, safety tips, traffic rules tips, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;