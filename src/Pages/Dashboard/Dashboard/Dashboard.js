import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/115023-bike.json'

const Dashboard = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions}
                height={550}
                width={550} />
        </div>

    );
};

export default Dashboard;