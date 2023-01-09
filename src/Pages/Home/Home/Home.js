import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Askedquestions from '../Askedquestions/Askedquestions';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ContactUs from '../ContactUs/ContactUs';
import LatestBikes from '../LatestBikes/LatestBikes';
import Steps from '../Steps/Steps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseProduct></AdvertiseProduct>
            <Categories></Categories>
            <LatestBikes></LatestBikes>
            <Steps></Steps>
            <Askedquestions></Askedquestions>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;