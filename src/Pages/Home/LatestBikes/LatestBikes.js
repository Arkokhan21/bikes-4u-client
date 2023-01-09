import React from 'react';

const LatestBikes = () => {
    return (
        <section className="py-6 sm:py-12 bg-gray-200 text-gray-100 my-32">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-black">Latest Bikes In BD</h2>
                    <p className="font-serif text-sm text-black">See all new updates here</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col bg-gray-500">
                        <span rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.ibb.co/KLDskYJ/bike9.jpg" />
                        </span>
                        <div className="flex flex-col flex-1 p-6">
                            <h2>KTM RC 125 2022</h2>
                            <h2>Price: 487,000 BDT</h2>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                                <span>April 1, 2022</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-500">
                        <span rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.ibb.co/M8vGxXn/bike10.webp" />
                        </span>
                        <div className="flex flex-col flex-1 p-6">
                            <h2>KTM Duke 125 European Edition</h2>
                            <h2>Price: 499,000 BDT</h2>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                                <span>June 1, 2020</span>
                                <span>4.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-500">
                        <span rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.ibb.co/vDbVKSG/bike12.jpg" />
                        </span>
                        <div className="flex flex-col flex-1 p-6">
                            <h2>Yamaha R15M</h2>
                            <h2>Price: 570,000 BDT</h2>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                                <span>July 18, 2020</span>
                                <span>9.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-500">
                        <span rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.ibb.co/k2zfmrV/bike11.jpg" />
                        </span>
                        <div className="flex flex-col flex-1 p-6">
                            <h2>Aprilia GPR 150</h2>
                            <h2>Price: 300,000 BDT</h2>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                                <span>June 1, 2022</span>
                                <span>3.1K views</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default LatestBikes;