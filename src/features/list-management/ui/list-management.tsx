import { Error, ErrorIcon, ERRORS_INFO, ErrorVariations, Icon, Layout, LayoutVariations, Loader, LoaderVariations, Scroll, useGetRouteConfig } from "@/shared";
import { ListItem } from "./list-item";
import { DataControlPanel } from "./data-control-panel";
import { useListManagementApi } from "../hooks/use-list-management-api";


export const ListManagement = ({ controlPanelPath }: { controlPanelPath: string }) => {
    const { config } = useGetRouteConfig(controlPanelPath);
    const { entriesData, isLoadingEntries, isErrorLoadingEntries } = useListManagementApi(config);

    if (!config) return null;

    if (isErrorLoadingEntries) return (
        <Error type={ErrorVariations.DASHBOARD_ERROR}>
            <Icon pathIcon={ErrorIcon.src} alt="error" height={80} width={80} />

            <Error.ErrorContainerText>
                <h2>
                    {ERRORS_INFO.FETCH_DATA_ERROR}
                </h2>
            </Error.ErrorContainerText>
        </Error>
    );
    
    if (isLoadingEntries) return (
        <Layout type={LayoutVariations.PANEL}>
            <Loader type={LoaderVariations.DEFAULT} />
        </Layout>
    );

    type EntryType = typeof config.DATA_TYPE;

    return (
        <Layout type={LayoutVariations.PANEL}>
            <DataControlPanel config={config} />

            <Scroll>
                {entriesData?.map((item: EntryType) =>
                    <ListItem<EntryType>
                        key={item.id}
                        item={item}
                        config={config}
                    />)}
            </Scroll>
        </Layout>
    );
};