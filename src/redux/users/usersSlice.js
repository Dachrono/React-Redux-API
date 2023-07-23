import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers:{

    }
})

export default userSlice.reducer;