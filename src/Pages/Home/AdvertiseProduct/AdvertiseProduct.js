import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseProductDetails from '../AdvertiseProductDetails/AdvertiseProductDetails';
import SubmitModal from '../Categories/SubmitModal';

const AdvertiseProduct = () => {

    const [bikeForBuy, setBikeForBuy] = useState(null)

    // get all addedbikes from database -
    const { data: addedBikes = [], isLoading } = useQuery({
        queryKey: ['addedbikesss'],
        queryFn: () => fetch('http://localhost:5000/addedbikesss')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center'>
                {
                    addedBikes.map(addedBike => addedBike.isAdvertise === 'advertise' && <AdvertiseProductDetails key={addedBike._id} addedBike={addedBike} setBikeForBuy={setBikeForBuy}></AdvertiseProductDetails>)
                }
            </div>
            {bikeForBuy &&
                <SubmitModal bikeForBuy={bikeForBuy} setBikeForBuy={setBikeForBuy}></SubmitModal>}
        </div>
    );
};

export default AdvertiseProduct;