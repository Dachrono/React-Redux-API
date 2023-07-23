import { configureStore } from "@reduxjs/toolkit";
import users from './users/usersSlice'

export default configureStore({
    reducer: {
        userList: users,
    }
})