import { Button, ButtonVariations, Layout, LayoutVariations } from "@/shared"
import { CalendarWidget, ScheduleWidget } from "@/widgets"


export const SchedulePage = () => {
    return (
        <Layout type={LayoutVariations.PAGE}>
            <Button type_={ButtonVariations.BASIC}>По преподавателю</Button>
            <Button type_={ButtonVariations.BASIC}>По группе</Button>
            <Button type_={ButtonVariations.BASIC}>По аудитории</Button>

            <CalendarWidget />
            <ScheduleWidget />
        </Layout>
    )
}