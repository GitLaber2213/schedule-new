import { ScheduleTable } from "@/features"
import { Layout, LayoutVariations } from "@/shared"


export const ScheduleWidget = () => {
    return (
        <Layout type={LayoutVariations.WIDGET}>
            <ScheduleTable/>
        </Layout>
    )
}