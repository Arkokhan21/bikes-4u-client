import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

    const orderedbike = useLoaderData()

    const { bike, price } = orderedbike

    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-xl'>Please Pay <strong>{price} BDT</strong>  To Get Your Dream Bike <strong>{bike}</strong> </p>
            <div className='w-96 mt-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm orderedbike={orderedbike} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;