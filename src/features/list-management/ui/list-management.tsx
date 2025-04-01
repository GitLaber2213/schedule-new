import { Layout, LayoutVariations, Scroll} from "@/shared";
import { ListItem } from "./list-item";
import { DataControlPanel } from "./data-control-panel";

export const ListManagement = () => {
    return (
        <Layout type={LayoutVariations.PANEL} style={{ height: '80%' }}>
            <DataControlPanel />

            <Scroll>
                <ListItem />    
            </Scroll>
        </Layout>
    );
}