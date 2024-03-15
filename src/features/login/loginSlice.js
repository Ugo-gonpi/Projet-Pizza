import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({

    name: 'login',

    initialState: {
        email: 'ugogonzalez50@gmail.com',
        password: 'Cool2002AZ',
    },

    reducers: {

        getEmail: ((state, action) => {
            state.email = action.payload
        }),

        getPassword: ((state, action) => {
            state.password = action.payload
        }),

    },
})

export const {getEmail, getPassword} = loginSlice.actions

export default loginSlice.reducer