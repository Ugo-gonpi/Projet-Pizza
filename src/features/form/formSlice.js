import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({

    name: 'form',

    initialState: {
        name: '',
        firstName: '',
        age: '',
    },

    reducers: {

        getName: (state, action) => {
            state.name = action.payload
        },

        getFirstName: (state, action) => {
            state.firstName = action.payload
        },

        getAge: (state, action) => {
            state.age = action.payload
        },
    }
})

export const {getName, getFirstName, getAge} = formSlice.actions

export default formSlice.reducer