import { CRUDForm } from "@/features";



export default async function UpdateEntry({ params }: Readonly<{ params: { controlPanelType: string; id: number; }; }>) {
    const { controlPanelType, id } = await params;
    
    return <CRUDForm controlPanelPath={controlPanelType} id={id} />;
}