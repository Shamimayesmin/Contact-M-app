import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contact/contactSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
    reducer : {
        contact : contactReducer,
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


export default store;