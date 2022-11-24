import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const SubmitModal = ({ bikeForBuy, setBikeForBuy }) => {

    const { user } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const buyerName = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const location = form.location.value

        const submitting = {
            bike: bikeName,
            price: resalePrice,
            buyer: buyerName,
            phone,
            email,
            location,
        }
        console.log(submitting)
        setBikeForBuy(null)

    }

    const { resalePrice, bikeName } = bikeForBuy

    return (
        <div>
            <input type="checkbox" id="submit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="submit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bikeName}</h3>
                    <h3 className="text-sm font-bold mb-5">Hot Price: {resalePrice} BDT</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full" required />
                        <input type="submit" className='w-full p-2 btn btn-primary text-white' value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitModal;