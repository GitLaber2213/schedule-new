
import { baseApi } from "@/shared";

interface APIConfig {
    getEntry: (id: string) => string;
    addEntry: string;
    updateEntry: (id: string) => string;

}


export const CRUDFormApiBuilder = (APIConfig: APIConfig) => baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEntry: builder.query({
            query: (id) => APIConfig.getEntry(id),
        }),
        addEntry: builder.mutation({
            query: (data) => ({
                url: APIConfig.addEntry,
                method: 'POST',
                body: data,
                
            }),
            invalidatesTags: ['entries'],
        }),
        updateEntry: builder.mutation({
            query: ({ id, data }) => ({
                url: APIConfig.updateEntry(id),
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['entries'],
        }),
    }),
    overrideExisting: true
});