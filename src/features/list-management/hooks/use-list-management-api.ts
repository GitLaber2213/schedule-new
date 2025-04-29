import { entriesApiBuilder } from "../api/api";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared";
import { IConfig } from "@/shared/types/config-type";

export const useListManagementApi = (config: IConfig | null) => {
    if (!config) {
        return {
            entriesData: [],
            addEntry: () => { },
            updateEntry: () => { },
            deleteEntry: async (id: number) => { },
            deleteChoice: () => { },
            
            isLoadingEntries: false,
            isLoadingDelete: false,
            isLoadingDeleteChoice: false,

            isErrorLoadingEntries: false,
            isErrorDelete: false,
            isErrorDeleteChoice: false,
        };
    };
    
    const { push } = useRouter();

    const entriesApi = entriesApiBuilder(config.API);
    const { data: entriesData, isLoading: isLoadingEntries, isError: isErrorLoadingEntries } = entriesApi.useGetEntriesQuery(config.API.getEntries);
    const [deleteQuery, { isLoading: isLoadingDelete, isError: isErrorDelete }] = entriesApi.useDeleteEntryMutation();
    const [deleteChoiceQuery, { isLoading: isLoadingDeleteChoice, isError: isErrorDeleteChoice }] = entriesApi.useDeleteEntriesMutation();

    const addEntry = (): void => {
        push(config.PATH + "/" + ROUTES.ADD_ENTRY.PATH);
    };

    const updateEntry = async (id: number): Promise<void> => {
        push(config.PATH + "/" + ROUTES.UPDATE_ENTRY.PATH + "/" + id);
    };

    const deleteChoice = async (selectedIds: number[]): Promise<void> => {
        await deleteChoiceQuery(Array.from(selectedIds));
    };

    const deleteEntry = async (id: number): Promise<void> => {
        await deleteQuery(id);
    };

    return {
        entriesData,
        addEntry,
        updateEntry,
        deleteChoice,
        deleteEntry,

        isLoadingEntries,
        isLoadingDelete,
        isLoadingDeleteChoice,

        isErrorLoadingEntries,
        isErrorDelete,
        isErrorDeleteChoice,
    };
}