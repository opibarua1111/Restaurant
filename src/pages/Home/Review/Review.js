import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ review }) => {
    const { Name, email, description, rating } = review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0, backgroundColor: 'aliceblue' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {Name}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                    ></Rating>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;