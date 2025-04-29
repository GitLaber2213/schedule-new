import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();

type ListManagementState = {
    selectedItems: number[];
    searchText: string;
};

const initialState: ListManagementState = {
    selectedItems: [],
    searchText: '',
};

export const listManagementSlice = createSlice({
    name: "listManagementSlice",
    initialState: initialState,
    reducers: {
        changeSelected: (state: ListManagementState, action: PayloadAction<number>) => {
            const currentSet = new Set(state.selectedItems);

            if (currentSet.has(action.payload)) {
                currentSet.delete(action.payload);
            } else {
                currentSet.add(action.payload);
            }
            state.selectedItems = Array.from(currentSet);
        },

        deleteOneEntry: (state: ListManagementState, action: PayloadAction<number>) => {
            const currentSet = new Set(state.selectedItems);
            currentSet.delete(action.payload);
            state.selectedItems = Array.from(currentSet);
        },

        clearSelectedItems: (state: ListManagementState) => {
            state.selectedItems = [];
        },

        changeSearchText: (state: ListManagementState, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
    }
});