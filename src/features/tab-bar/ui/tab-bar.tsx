'use client'
import { Button, ButtonVariations, Routes } from "@/shared"
import { useRouter } from "next/navigation";


export const TabBar = () => {
    const { push } = useRouter();


    const handleHavigation = (SubPath: string) => {
        push(`${Routes.DASHBOARD}/${SubPath}`)
    }
    return (
        <div>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.SCHEDULE_CONTROL_PANEL) }}>Расписание</Button>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.TARRIFICATIONS_CONTROL_PANEL) }}>Тарификации</Button>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.GROUPS_CONTROL_PANEL) }}>Группы</Button>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.TEACHERS_CONTROL_PANEL) }}>Преподаватели</Button>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.CLASSROOMS_CONTROL_PANEL) }}>Аудитории</Button>
            <Button type_={ButtonVariations.LIGHT_BUTTON} onClick={() => { handleHavigation(Routes.TYPE_EDUCATIONS_CONTROL_PANEL) }}>Тип занятий</Button>
        </div>
    )
}