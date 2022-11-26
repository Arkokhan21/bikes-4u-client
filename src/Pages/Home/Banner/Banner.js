import React from 'react';

const Banner = () => {
    return (
        <section className="p-4 lg:p-8">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://www.wallpaperuse.com/wallp/48-480522_m.jpg" alt="" className="h-80 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                        <h3 className="text-3xl font-bold">USED BIKES FOR SALE IN <span className='text-green-500'>BANGLADESH</span></h3>
                        <p className="my-6 text-gray-700">Experience Bike Reviews, News, and Resale Motorcycle Price In Bangladesh At Bike4U.com</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://www.motolegends.com/Images/contentarchive/shoei-ryd-lifestyle-1.jpg" alt="" className="h-80 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                        <h3 className="text-3xl font-bold"><span className='text-green-500'>Bike4U</span> made for bikes</h3>
                        <p className="my-6 text-gray-700">Bike4U.com also provides tips on motorcycle maintenance, motorcycle buying, riding, safety tips, traffic rules tips, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;