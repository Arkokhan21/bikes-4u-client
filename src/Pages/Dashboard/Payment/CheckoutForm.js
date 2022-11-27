import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ orderedbike }) => {

    const [transactionId, setTransactionId] = useState('')

    const [processing, setProcessing] = useState(false)

    const [clientSecret, setClientSecret] = useState('')

    const stripe = useStripe();
    const elements = useElements();
    const { price, buyer, email, _id } = orderedbike


    // get payment data (clientSecret) - 
    useEffect(() => {
        fetch("https://bikes-4u-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setProcessing(true);

        //  Process card confirmation for Payment -
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer,
                        email: email
                    },
                },
            },
        );

        if (confirmError || error) {
            toast.error(confirmError.message)
        }

        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                orderedbikeId: _id
            }
            // post payment data in database - 
            fetch('https://bikes-4u-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Congratulations! Your payment has been completed.')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                transactionId && <div className='mt-10'>
                    <p>Your TransactionId: <strong>{transactionId}</strong></p>
                </div>
            }
            <button className='btn btn-sm btn-primary mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;