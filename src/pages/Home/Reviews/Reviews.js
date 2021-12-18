import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const { reviews } = useReviews();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" color="text.secondary" sx={{ my: 4 }}>
                    OUR Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;