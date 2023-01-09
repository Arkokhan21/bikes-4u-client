import React from 'react';

const Askedquestions = () => {
    return (
        <section className="bg-gray-200 text-black mb-32 w-4/5 mx-auto rounded-md">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-3xl font-bold leading-none text-center">Clear All Your Doubts</h2>
                <div className="flex flex-col sm:px-8 lg:px-12 xl:px-32">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">How do I know that Bikes4U bikes are good in condition?</summary>
                        <div className="px-4 pb-4">
                            <p>All the bikes offered on our website have passed a rigorous inspection by our specialized mechanics. So you can rest assured that a Bikes4U bike is much more than just a reconditioned bike.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">What payment methods does Bikes4U offer?</summary>
                        <div className="px-4 pb-4">
                            <p>You can pay by credit card (Visa, MasterCard, etc.), bank transfer, PayPal, and payment in instalments. We make it easy for you.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer">How do returns work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We want you to fall in love with your next bike, but if for any reason you don't, you have 15 days to return it and get your money back. No hassle.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Askedquestions;