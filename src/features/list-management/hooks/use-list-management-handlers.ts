import { useDispatch, useSelector } from "react-redux";
import { listManagementSlice } from "../model/list-management.slice";
import { AppDispatch, RootState } from "@/shared/types/store-type";



export const useListManagementHandlers = (itemId?: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const selectAllItems = useSelector((state: RootState) => state.listManagementSlice.selectedItems);
    let selectOneItem = false;
    if(itemId) {
        selectOneItem = useSelector((state: RootState) => state.listManagementSlice.selectedItems.includes(itemId))
    };


    const handleCheckBoxChange = (id: number) => {
        dispatch(listManagementSlice.actions.changeSelected(id));
    };

    const handleOneEntryDeleteClick = (id: number) => {
        dispatch(listManagementSlice.actions.deleteOneEntry(id));
    };

    const handleManyEntriesDeleteClick = () => { 
        dispatch(listManagementSlice.actions.clearSelectedItems());
    };

    const handleClearChoiceClick = (): void => {
        dispatch(listManagementSlice.actions.clearSelectedItems());
    };

    return {
        selectAllItems,
        selectOneItem,
        
        handleCheckBoxChange,
        handleOneEntryDeleteClick,
        handleManyEntriesDeleteClick,
        handleClearChoiceClick,
    };
};