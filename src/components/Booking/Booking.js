import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { id, bookName } = useParams();
    const [tourism, setTourism] = useState([]);
    const { user } = useAuth();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json())
            .then(data => setTourism(data))
    }, []);

    const onSubmit = data => {
        fetch('http://localhost:5000/tourists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Registered');
                    reset();
                }
                console.log(data);
            })
    }

    return (
        <div>
            {/* <div className="header-img flex justify-center items-center"></div> */}
            <div className="w-full lg:w-11/12 xl:w-10/12 m-auto pt-20 px-4 grid grid-cols-2">
                <div className="max-w-xl">
                    <h3 className="text-3xl text-center font-medium text-gray-700 mb-8"><h3>{tourism?.name}</h3></h3>
                    <img src={tourism?.image} alt="" />
                    <p className="text-gray-600 my-2">{tourism?.desc}</p>
                    <p>{tourism?.days} Days</p>
                </div>
                <div className="max-w-xl">
                    <h3 className="text-3xl text-center font-medium text-gray-700 mb-8">Please Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input {...register("name", { required: true })} defaultValue={user?.displayName || ""} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Name" />
                            <p className="mt-1 text-red-600"> {errors.name && <span>This field is required</span>} </p>
                        </div>
                        <div className="mb-4">
                            <input {...register("email", { required: true })} defaultValue={user?.email || ""} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Email" />
                            <p className="mt-1 text-red-600"> {errors.email && <span>This field is required</span>} </p>
                        </div>
                        <div className="mb-4">
                            <input {...register("bookName", { required: true })} defaultValue={bookName || ""} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Tourism" />
                            <p className="mt-1 text-red-600"> {errors.bookName && <span>This field is required</span>} </p>
                        </div>
                        <div className="mb-4">
                            <input {...register("mobile", { required: true })} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Mobile Number" />
                            <p className="mt-1 text-red-600"> {errors.mobile && <span>This field is required</span>} </p>
                        </div>
                        <div className="mb-4">
                            <input type="date" {...register("date", {})} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Date" />
                        </div>
                        <div className="mb-4">
                            <textarea {...register("address")} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Address" cols="30" rows="3"></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="bg-gray-600 hover:bg-gray-700 w-full rounded font-medium text-white text-center py-3 px-3">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;