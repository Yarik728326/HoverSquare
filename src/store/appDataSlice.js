import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fieldSizeHandler } from "../ustils/fieldSizeHandler";

const initialState = {
    data: null,
    error: null,
    status: null,
    fields: []
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async function(_, { rejectWithValue }) {
        try {
            const response = await fetch('https://demo7919674.mockable.io/')
            if(!response.ok) {
                throw new Error('Server Error')
            }
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        hoverHandler: (state, action) => {
            const field = state.fields[action.payload].isActive;
            state.fields[action.payload].isActive = !field;
        },
        startHandler: (state, action) => {
            state.fields = fieldSizeHandler(action.payload)
        }
    },
    extraReducers : {
        [fetchData.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchData.fulfilled] : (state, { payload }) => {
            state.data = payload;
            state.status = 'resolved';
        },
        [fetchData.rejected] : (state, { payload }) => {
            state.error = payload;
            state.status = 'rejected'
        }
    }
})

export const { hoverHandler, startHandler } = dataSlice.actions;
export default dataSlice.reducer