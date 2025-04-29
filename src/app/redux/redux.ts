import { authSlice } from "@/features/auth/model/auth-slice";
import { listManagementSlice } from "@/features/list-management/model/list-management.slice";
import { baseApi } from "@/shared";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer, 
        [listManagementSlice.name]: listManagementSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})