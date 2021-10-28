import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="w-full lg:w-11/12 xl:w-10/12 m-auto px-4">
                <div className="hero-text w-full sm:max-w-xl m-auto flex flex-col justify-center items-center">
                    <h1>Incredible Travel With Friends</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;