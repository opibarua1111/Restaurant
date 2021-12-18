import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from 'react-bootstrap';
import './Purchase.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchSingleFoods, addPurchase } from '../../redux/slices/foodSlice';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const despatch = useDispatch();
    useEffect(() => {
        despatch(fetchSingleFoods(id))
    }, [])
    const food = useSelector((state) => state.foods.Food);
    const name = food?.name;
    const onSubmit = data => {
        const dataInfo = {
            ...data,
            status: "pending",
            title: name
        }

        // despatch(addPurchase(dataInfo));
        fetch('https://pacific-coast-31375.herokuapp.com/purchease', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchase processed Successfully');
                    reset();
                }
            })
    };
    return (
        <Box>
            <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
                <Typography variant="h4" color="text.secondary" sx={{ marginBottom: '30px' }}>
                    Purchase Your Product
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card>
                            <CardHeader
                                title={food?.name}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                className="image"
                                image={food?.img}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {food?.description}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    $ {food?.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <Box className="justify-center" sx={{ display: 'flex', justifyContent: 'center' }}>
                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="City" defaultValue="" {...register("city")} />
                                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                                <Button className="button" variant="outline-success" type="submit">Submit</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};


export default Purchase;