import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/tourists/byemail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify([email])
        })
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            fetch(`http://localhost:5000/tourists/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted');
                        const restBooking = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(restBooking);
                    }
                })
        }

    }


    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto py-3 px-4">
            <h3 className="text-3xl text-center font-medium text-gray-700 mt-8 mb-10">My Booking List</h3>
            <div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        myBookings.map(booking =>
                            <div className="p-6 my-auto border shadow-lg">
                                <h1 className="mb-1 text-2xl font-semibold text-gray-800">{booking.bookName}</h1>
                                <p className="text-lg font-medium text-gray-600 mb-4">Date: {booking.date}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-base text-gray-600 font-medium mt-2 mb-4">Pending</span>
                                    <button onClick={() => handleDelete(booking._id)} className="bg-red-600 hover:bg-gray-600 text-white rounded py-2 px-4">Cancel</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default MyBooking;