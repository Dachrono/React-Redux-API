import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUser = createAsyncThunk('get/fetchUser', async (API) => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      return response.data;
    } catch (error) {
      return API.rejectWithValue('something wrong');
    }
});

const initialState = {
    userList: [],
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userList = action.payload.results;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Error';
            })
    }
})

export default userSlice.reducer;