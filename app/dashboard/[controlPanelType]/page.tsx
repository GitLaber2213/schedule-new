import { ListManagement } from "@/features";

export default async function AddEntry({ params }: Readonly<{ params: { controlPanelType: string; }; }>) {
    const { controlPanelType } = await params;
    
    return <ListManagement controlPanelPath={controlPanelType} />;
}