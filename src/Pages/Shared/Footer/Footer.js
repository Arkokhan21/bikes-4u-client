import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-200 text-base-content sticky top-[100vh]">
            <div>
                <p className='text-2xl font-bold'>Bikes 4U</p>
                <p className='text-lg'>Providing reliable Bikes since 2018</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <span className="link link-hover">Resale Bikes</span>
                <span className="link link-hover">Motorcycle Price</span>
                <span className="link link-hover">Bike Reviews</span>
                <span className="link link-hover">Tips</span>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <span className="link link-hover">About us</span>
                <span className="link link-hover">Contact</span>
                <span className="link link-hover">Jobs</span>
                <span className="link link-hover">Press kit</span>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <span className="link link-hover">Terms of use</span>
                <span className="link link-hover">Privacy policy</span>
                <span className="link link-hover">Cookie policy</span>
            </div>
        </footer>
    );
};

export default Footer;