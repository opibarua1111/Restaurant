import { Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const dataInfo = {
            ...data
        }
        fetch('https://pacific-coast-31375.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' Your review processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <Typography variant="h4" color="text.secondary" sx={{ my: 4 }}>
                Send Review
            </Typography>
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("Name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <textarea className="rounded-lg" {...register("description")} placeholder="Description" />
                <input placeholder="rating" defaultValue="" {...register("rating")} />
                <Button className="button" variant="outline-success" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddReview;