import React from 'react';
import { Link } from 'react-router-dom';

const Place = (props) => {
    const { _id, name, desc, days, image } = props.place;

    return (
        <div className="mx-auto group w-full shadow-2xl max-w-md pb-6 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer">
            <div className="content bg-cover bg-center h-64 rounded-2xl" style={{ backgroundImage: "url(" + `${image}` + ")" }}>
                <div className="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl">
                    <div className="w-1/2 flex items-center">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>4116</span>
                    </div>
                    <div className="w-1/2 flex items-center flex-row-reverse">
                        <svg className="w-6 h-6 ml-2 place-items-end group-hover:animate-ping absolute " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <svg className="w-6 h-6 ml-2 place-items-end relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span className="place-items-end">16</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4">
                <h2 className="mt-2 text-2xl font-medium text-gray-800">{name}</h2>
                <p className="my-4 text-gray-500">{desc.slice(0, 130)}...</p>
                <div className="flex justify-between items-center">
                    <div className="text-base uppercase font-semibold text-gray-500">{days} Days Tour</div>
                    <Link to={`booking/${_id}, ${name}`}><button className="p-3 px-6 bg-yellow-500 hover:bg-gray-600 text-white font-medium rounded-md ">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Place;