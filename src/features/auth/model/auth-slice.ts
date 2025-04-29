import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        formData: {}
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = {...state.formData, ...action.payload};
        },
    },
});