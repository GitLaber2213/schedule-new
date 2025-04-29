import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:4200'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['entries'],
    endpoints: () => ({}),
})