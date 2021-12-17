import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchFoods } from '../../../redux/slices/foodSlice';
import Food from '../Food/Food';

const Foods = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFoods());
    }, [])
    const foods = useSelector((state) => state.foods.discover);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" color="text.secondary" sx={{ my: 4 }}>
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, mx: 'auto' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        foods.slice(0, 6).map(food => <Grid container item xs={4} sm={4} md={4} >
                            <Food
                                key={food._id}
                                food={food}>
                            </Food>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Foods;