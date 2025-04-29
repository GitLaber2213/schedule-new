import { baseApi } from "@/shared";

interface IApiConfig {
    getEntries: string;
    deleteEntry: (id: string) => string;
    deleteEntries: string;
}

export const entriesApiBuilder = (apiConfig: IApiConfig) => baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEntries: builder.query({
            query: () => apiConfig.getEntries,
            providesTags: ['entries'],
        }),
        deleteEntry: builder.mutation({
            query: (id) => ({
                url: apiConfig.deleteEntry(id),
                method: 'DELETE',
            }),
            invalidatesTags: ['entries'],
        }),
        deleteEntries: builder.mutation({
            query: (ids) => ({
                url: apiConfig.deleteEntries,
                method: 'DELETE',
                body: ids,
            }),
            invalidatesTags: ['entries'],
        })
    }),
    overrideExisting: true
})
