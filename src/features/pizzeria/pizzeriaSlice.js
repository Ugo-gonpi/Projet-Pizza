import { createSlice } from "@reduxjs/toolkit";

export const pizzeriaSlice = createSlice({
    name: 'pizzeria',

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: ((state, action) => {
            state.cart.push(action.payload)
        }),

        removeFromCart: ((state, action) => {
            state.cart.slice(action.payload, 1)
        }),

        editFromCart: ((state, action) => {

        }),
    }
})

export const {addToCart, removeFromCart, editFromCart} = pizzeriaSlice.actions

export default pizzeriaSlice.reducer