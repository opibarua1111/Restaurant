import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
    const { _id, name, description, img, price } = props.food;
    return (
        <Card>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                height="194"
                className="image"
                image={img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    $ {price}
                </Typography>
                <Link to={`/purchase/${_id}`}>
                    <Button variant="outline-success">Purchase Now</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default Food;