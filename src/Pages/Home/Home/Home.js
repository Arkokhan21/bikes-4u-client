import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import LatestBikes from '../LatestBikes/LatestBikes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseProduct></AdvertiseProduct>
            <Categories></Categories>
            <LatestBikes></LatestBikes>
        </div>
    );
};

export default Home;