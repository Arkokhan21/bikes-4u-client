import React from 'react';

const LatestBikes = () => {
    return (
        <section className="py-6 sm:py-12 bg-gray-200 text-gray-100 mt-32">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-black">Latest Bikes In BD</h2>
                    <p className="font-serif text-sm text-black">See all new updates here</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col bg-gray-500">
                        <span rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.cdn.newsbytesapp.com/images/l96720211215182954.jpeg" />
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
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://www.bennetts.co.uk/-/media/bikesocial/reviews/bikes/2017-ktm-duke-125/740_duke_125_detail_2017-03-31-ktm-duke-turin-52.ashx?h=444&la=en&w=740&hash=B2F29AC447AD3EE14A0A5A97553248F6A8553C80" />
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
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://asset.kompas.com/crops/upOZNMFVOU6zzpFTA_VAiqaSPZw=/196x111:1845x1210/750x500/data/photo/2021/12/08/61afe0af03822.jpg" />
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
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://cdni.autocarindia.com/ExtraImages/20180919044756_Aprilia%20RS%20150.JPG" />
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