import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('../places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto px-4">
            <div className="container mx-auto py-10 md:py-20 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                    <div className="p-10 min-h-100 max-w-xl w-full rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: "url(" + `https://images.unsplash.com/photo-1515615791787-d8e0022e233f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80` + ")" }}>
                        <h1 className="mt-5 text-3xl text-gray-100 leading-snug min-h-33">Discover Chicago by Yacht, not Junk!
                        </h1>
                        <div className="mt-20">
                            <span className="font-semibold text-xl">Chicago Yacht</span>
                        </div>
                    </div>
                    <div className="min-h-100 bg-orange-600 max-w-xl w-full rounded-xl text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: "url(" + `https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80` + ")" }}>
                        <div className="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                            <h1 className="mt-5 text-3xl text-gray-100 leading-snug min-h-33">One small step for man one giant leap for mankind
                            </h1>
                            <div className="mt-20">
                                <span className="font-semibold text-xl">Virginia U.S. state</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 min-h-100 max-w-3xl w-full bg-purple-600 rounded-xl text-gray-100 xl:col-span-2 transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: "url(" + `https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80` + ")" }}>
                        <h1 className="mt-5 text-5xl font-light text-gray-100 leading-snug  min-h-33">A journey of a thousand miles begins with a single step
                        </h1>
                        <div className="mt-10">
                            <span className="font-semibold text-xl">Pulpit Rock, Norway</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10 md:mb-20">
                <h1 className="mb-10 text-4xl font-medium text-gray-700">Top Destinations</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        places.map(place => <Place key={place.id} place={place}></Place>)
                    }
                </div>
            </div>
            <div className="bg-gray-100 py-10 px-6 rounded">
                <div className="w-full md:max-w-4xl m-auto md:flex justify-between items-center">
                    <div className="flex mb-4 md:mb-0">
                        <div className="mr-4">
                            <img src="https://mixmap.travelerwp.com/wp-content/themes/traveler/v2/images/svg/ico_email_subscribe.svg" alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-gray-600 mb-1">Get Updates & More</h3>
                            <p className="text-gray-500">Thoughtful thoughts to your inbox</p>
                        </div>
                    </div>
                    <div>
                        <input className="border-0 rounded-l-md focus:outline-none w-8/12 md:w-96 px-3 py-4" type="text" placeholder="Your Email" />
                        <button className="py-4 px-6 -m-2 bg-gray-600 hover:bg-gray-700 rounded-r-md text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Places;