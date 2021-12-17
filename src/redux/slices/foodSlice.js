import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchFoods = createAsyncThunk(
    'food/fetchFoods',
    async () => {
        const response = await fetch('http://localhost:5000/foods')
            .then(res => res.json())
        return response
    }
)

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        discover: [],
        readingList: [],
        finishedList: [],
        status: 'idle'
    },
    reducers: {
        addToReadingList: (state, { payload }) => {
            state.readingList.push(payload)
        },
        removeFormReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(book => book.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoods.fulfilled, (state, action) => {
            state.discover = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchFoods.pending, (state, action) => {
            state.status = 'pending';
        })
    },

});

export const { addToReadingList, removeFormReadingList } = foodSlice.actions;

export default foodSlice.reducer;