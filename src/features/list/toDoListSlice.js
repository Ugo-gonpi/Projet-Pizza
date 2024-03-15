import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({

    name: 'todoList',

    initialState: {
        list: [],
    },

    reducers: {

        addElements: ((state, action) => {
            state.list.push(action.payload)
        }),

        deleteElements: ((state, action) => {
            
        }),

        editElements: ((state, action) => {

        }),
    },
})

export const {addElements, deleteElements, editElements} = toDoSlice.actions

export default toDoSlice.reducer