import { Calendar, GroupSelector } from "@/features"
import { Layout, LayoutVariations } from "@/shared"

export const CalendarWidget = () => {
    return (
        <Layout type={LayoutVariations.WIDGET}>
            <div style={{width: '100%'}}>
                <GroupSelector />
            </div>
            <Calendar />
        </Layout>
    )
}