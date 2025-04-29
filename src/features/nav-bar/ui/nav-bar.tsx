import { Link_, ROUTES } from "@/shared";


export const NavBar = () => {
    return (
        <nav>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.SCHEDULE_CONTROL_PANEL.PATH}`}>Расписание</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.TARRIFICATIONS_CONTROL_PANEL.PATH}`}>Тарификации</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.GROUPS_CONTROL_PANEL.PATH}`}>Группы</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.TEACHERS_CONTROL_PANEL.PATH}`}>Преподаватели</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.DISCIPLINES_CONTROL_PANEL.PATH}`}>Дисциплины</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.CLASSROOMS_CONTROL_PANEL.PATH}`}>Аудитории</Link_>
            <Link_ href={`${ROUTES.DASHBOARD.PATH}${ROUTES.CONFIGS.TYPE_EDUCATIONS_CONTROL_PANEL.PATH}`}>Тип занятий</Link_>
        </nav>
    );
};