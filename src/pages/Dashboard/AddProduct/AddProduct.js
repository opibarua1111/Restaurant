import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://pacific-coast-31375.herokuapp.com/foods', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Product successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2 className="my-5 pt-3 text-2xl font-bold text-gray-700">Please Add a Product</h2>
            <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                <input className="h-10 rounded-lg" type="text" {...register("title")} placeholder="Title" />
                <textarea className="rounded-lg" {...register("description")} placeholder="Description" />
                <input className="h-10 rounded-lg" type="number" {...register("price")} placeholder="Price" />
                <input className="h-10 rounded-lg" {...register("img")} placeholder="image url" />
                <Button className="button" variant="outline-success" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddProduct;