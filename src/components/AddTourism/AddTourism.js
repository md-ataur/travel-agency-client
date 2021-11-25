import React from 'react';
import { useForm } from "react-hook-form";

const AddTourism = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`https://secret-wildwood-94686.herokuapp.com/places`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
                // console.log(data);
            })
    }

    return (
        <div>
            <div className="max-w-sm m-auto pt-8 pb-4 px-4">
                <h3 className="text-3xl text-center font-medium text-gray-700 mt-4 mb-8">Add New Tourism</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input type="text" {...register("name", { required: true })} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Name" />
                        <p className="mt-1 text-red-600"> {errors.name && <span>This field is required</span>} </p>
                    </div>
                    <div className="mb-4">
                        <input type="number" {...register("days", { required: true })} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Days" />
                        <p className="mt-1 text-red-600"> {errors.days && <span>This field is required</span>} </p>
                    </div>
                    <div className="mb-4">
                        <input type="text" {...register("image", { required: true })} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Image URL" />
                    </div>
                    <div className="mb-4">
                        <textarea {...register("desc")} className="bg-blue-100 w-full rounded focus:outline-none py-3 px-3 text-gray-600" placeholder="Description" cols="30" rows="3"></textarea>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-gray-600 hover:bg-gray-700 w-full rounded font-medium text-white text-center py-3 px-3">Add Tourism</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTourism;