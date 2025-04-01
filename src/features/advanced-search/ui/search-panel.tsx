import { Input, InputVariations, Layout, LayoutVariations, Scroll } from "@/shared";



export const SearchPanel = () => {
    return (
        <Layout type={LayoutVariations.PANEL} style={{ height: '20%' }}>
            <Scroll>
                <Input type_={InputVariations.DASHBOARD} type="week" />
                <Input type_={InputVariations.DASHBOARD} type="date" />
                <Input type_={InputVariations.DASHBOARD} type="date" />
                <Input type_={InputVariations.DASHBOARD} type="date" />
            </Scroll>
        </Layout>
    );
}