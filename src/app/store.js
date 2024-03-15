import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counter/counterSlice";

import formSlice from '../features/form/formSlice';

import loginSlice from "../features/login/loginSlice";

import typesSlice from "../features/types/typesSlice";

import toDoSlice from "../features/list/toDoListSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,

        form: formSlice,

        login: loginSlice,

        types: typesSlice,

        todoList: toDoSlice,
    }
})