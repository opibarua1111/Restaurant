import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchFoods = createAsyncThunk(
    'food/fetchFoods',
    async () => {
        const response = await fetch('https://pacific-coast-31375.herokuapp.com/foods')
            .then(res => res.json())
        return response
    }
)
// single food
export const fetchSingleFoods = createAsyncThunk(
    'food/fetchSingleFoods',
    async (id) => {
        const response = await fetch(`https://pacific-coast-31375.herokuapp.com/foods/${id}`)
            .then(res => res.json())
        return response
    }
)
//post purchase
export const addPurchase = createAsyncThunk(
    'food/addPurchase',
    async (data) => {
        const response = await fetch('https://pacific-coast-31375.herokuapp.com/purchase', data)
        return response
    }
)

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        allFoods: [],
        Food: [],
        readingList: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.allFoods = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchFoods.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(fetchSingleFoods.fulfilled, (state, action) => {
            state.Food = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchSingleFoods.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(addPurchase.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
    },

});

export default foodSlice.reducer;