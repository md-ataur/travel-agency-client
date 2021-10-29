import React, { useEffect, useState } from 'react';

const ManageBooking = () => {
    const [tourists, setTourists] = useState([]);
    const [status, setStatus] = useState('Approved');
    const [toggle, setToggle] = useState(false);
    console.log(toggle);

    useEffect(() => {
        fetch(`https://secret-wildwood-94686.herokuapp.com/tourists`)
            .then(res => res.json())
            .then(data => setTourists(data))
    }, [toggle]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            fetch(`https://secret-wildwood-94686.herokuapp.com/tourists/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted');
                        const restTourist = tourists.filter(tourist => tourist._id !== id);
                        setTourists(restTourist);
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`https://secret-wildwood-94686.herokuapp.com/tourists/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify([status])
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setToggle(!toggle);
                }
            })

    }

    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto py-3 px-4">
            <h3 className="text-3xl text-center font-medium text-gray-700 mt-8 mb-10">Tourist List</h3>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Registration Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Booking List
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        tourists.map(tourist =>
                                            <tr key={tourist._id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">
                                                                {tourist.name}
                                                            </div>
                                                            <div className="text-gray-500">
                                                                {tourist.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-gray-900">{tourist.date}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tourist.bookName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-gray-600 leading-5 font-medium">
                                                        {tourist.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">
                                                    <button onClick={() => handleUpdate(tourist._id)} className="bg-green-700 hover:bg-gray-600 mr-2 text-sm font-medium text-white rounded py-2 px-3" {...tourist.status === 'Approved' ? 'disabled' : ''}>Update Status</button>
                                                    <button onClick={() => handleDelete(tourist._id)} className="bg-red-600 hover:bg-gray-600 text-sm font-medium text-white rounded py-2 px-3">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;