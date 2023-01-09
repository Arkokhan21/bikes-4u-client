import React from 'react';

const Steps = () => {
    return (
        <section className="bg-gray-200 text-black mb-32 w-4/5 mx-auto">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div>
                            <h3 className="text-3xl font-bold text-green-500 mb-5">Buying</h3>
                            <span className="font-bold tracking-wider">Buying a bike on
                                Bikes4U is as easy as 1–2–3</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-violet-400">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Find your new or second-hand bike</h3>
                                <p className="mt-3">Search bikes near you, by height or any bike attribute.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Make an appointment with the seller</h3>
                                <p className="mt-3">Pay a deposit to reserve the bike & meet up for a testdrive. Or if you want, get it delivered straight away.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Click to confirm</h3>
                                <p className="mt-3">Happy with the bike? Then confirm to pay the seller. If not, you cancel and the deposit is refunded entirely. At any point before confirming, you can switch to another bike.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;