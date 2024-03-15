import { createSlice } from "@reduxjs/toolkit";

export const typesSlice = createSlice({

    name: 'types',

    initialState: {
        style: "light",
        backgroundHeader: "bg-green-600",
        backgroundMain: "bg-red-600",
        backgroundFooter: "bg-blue-600",
        backgroundButton: "bg-orange-600",
        textColor: "text-white",
    },

    reducers: {
        changeStyle: ((state, action)=> {
            switch (action.payload) {
                case 1:
                    state.style = "dark"
                    state.backgroundHeader = "bg-[#070F2B]"
                    state.backgroundButton = "bg-[#9290C3]"
                    state.backgroundMain = "bg-[#1B1A55]"
                    state.backgroundFooter = "bg-[#535C91]"
                    state.textColor = "text-white"
                    break;
                case 2:
                    state.style = "funky"
                    state.backgroundHeader = "bg-[#7dd823]"
                    state.backgroundButton = "bg-[#d9d126]"
                    state.backgroundMain = "bg-[#0f5940]"
                    state.backgroundFooter = "bg-[#ff6000]"
                    state.textColor = "text-[#ffb611]"
                    break;
                case 3:
                    state.style = "cyberPunk"
                    state.backgroundHeader = "bg-[#711c91]"
                    state.backgroundButton = "bg-[#ea00d9]"
                    state.backgroundMain = "bg-[#091833]"
                    state.backgroundFooter = "bg-[#133e7c]"
                    state.textColor = "text-[#00ff9f]"
                    break;
                case 4:
                    state.style = "light"
                    state.backgroundHeader = "bg-green-600"
                    state.backgroundMain = "bg-red-600"
                    state.backgroundFooter = "bg-blue-600"
                    state.backgroundButton = "bg-orange-600"
                    state.textColor = "text-white"
                default:
                    break;
            }
        })
    },
})

export const {changeStyle} = typesSlice.actions

export default typesSlice.reducer