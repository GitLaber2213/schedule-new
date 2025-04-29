import { CRUDForm } from "@/features";




export default async function AddEntry({ params }: Readonly<{ params: { controlPanelType: string; }; }>)  {
    const { controlPanelType } = await params;
    return <CRUDForm  controlPanelPath={controlPanelType}/>;
}