import { IConfig } from "@/shared/types/config-type";
import { CRUDFormApiBuilder } from "../api/api";
import { useRouter } from "next/navigation";




export const useDataCRUDApi = (config: IConfig, id?: number) => {
    if(!config) return {
        addEntry: () => { },
        updateEntry: () => { },
        getEntry: () => { },
        onCancel: () => { },
        isLoading: false,
        isLoadingAddQuery: false,
        isLoadingUpdateQuery: false,
        isErrorAddEntry: false,
        isErrorUpdateEntry: false,
    }
    
    const { back } = useRouter();

    const CRUDFormApi = CRUDFormApiBuilder(config.CRUD_FORM.API);
    const [addQuery, { isLoading: isLoadingAddQuery, isError: isErrorAddEntry }] = CRUDFormApi.useAddEntryMutation();
    const [updateQuery, { isLoading: isLoadingUpdateQuery, isError: isErrorUpdateEntry }] = CRUDFormApi.useUpdateEntryMutation();
    
    type EntryType = typeof config.DATA_TYPE;

    
    const addEntry = async (data: EntryType): Promise<void> => {
        await addQuery({ ...data });
        if (!isLoadingAddQuery) back();
    }

    const updateEntry = async(data: EntryType): Promise<void> => {
        await updateQuery({id, data});
        if(!isLoadingUpdateQuery) back();
    }

    const getEntry = async(): Promise<{ entryData: EntryType | null, isLoadingGetEntry: boolean, isErrorGetEntry: boolean }> => {
        if (id) {
            const {data: entryData, isLoading: isLoadingGetEntry, isError: isErrorGetEntry } = CRUDFormApi.useGetEntryQuery(id);
            return { entryData, isLoadingGetEntry, isErrorGetEntry };
        }
        return { entryData: null, isLoadingGetEntry: false, isErrorGetEntry: false };
    }
    
    const onCancel = (): void => {
        back();
    }


    return {
        getEntry,
        addEntry,
        updateEntry,
        onCancel,

        isLoadingAddQuery,
        isLoadingUpdateQuery,

        isErrorAddEntry,
        isErrorUpdateEntry,


    }

    
}