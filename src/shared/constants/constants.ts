import { IActivityType, IClassRoom, IDiscipline, IGroup, ITariffication, ITeacher } from "../types/backend-data-type";
import { KeySynonyms } from "../types/config-type";

export const ROUTES = {
    AUTH: {
        PATH: '/auth/'
    },

    DASHBOARD: {
        PATH: '/dashboard/'
    },

    ADD_ENTRY: {
        PATH: '/add-entry/'
    },

    UPDATE_ENTRY: {
        PATH: '/update-entry/'
    },

    CONFIGS: {
        SCHEDULE_CONTROL_PANEL: {
            PATH: 'schedule-control-panel',
            API: {
                getEntries: `/schedule`,
                deleteEntry: (id: string) => `/schedule/${id}`,
                deleteEntries: `/schedule`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить расписание",
                HEADER_UPDATE: "Изменить расписание",
                API: {
                    getEntry: (id: string) => `/schedule/${id}`,
                    addEntry: `/schedule`,
                    updateEntry: (id: string) => `/schedule/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Название расписания",
                        type: "text",
                        name: "w",
                        required: false,
                    }
                ],
            },
            DATA_TYPE: {} as IGroup
        },

        TARRIFICATIONS_CONTROL_PANEL: {
            PATH: 'tarrifications-control-panel',
            API: {
                getEntries: `/tariffications`,
                deleteEntry: (id: string) => `/tariffications/${id}`,
                deleteEntries: `/tariffications`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить тарификацию",
                HEADER_UPDATE: "Изменить тарификацию",
                API: {
                    getEntry: (id: string) => `/tariffications/${id}`,
                    addEntry: `/tariffications`,
                    updateEntry: (id: string) => `/tariffications/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Дисциплина",
                        type: "text",
                        name: "discipline",
                        required: true,
                    },
                    {
                        placeholder: "Группа",
                        type: "text",
                        name: "group",
                        required: true,
                    },
                    {
                        placeholder: "Преподаватель",
                        type: "text",
                        name: "teacher",
                        required: true,
                    },
                    {
                        placeholder: "Тип занятий",
                        type: "text",
                        name: "activityType",
                        required: true,
                    },
                    {
                        placeholder: "Подгруппа",
                        type: "text",
                        name: "subGroup",
                        required: true,
                    },
                    {
                        placeholder: "Количество часов на год",
                        type: "text",
                        name: "activityYearHours",
                        required: true,
                    },
                ],
            },
            DATA_TYPE: {} as ITariffication,
        },

        TYPE_EDUCATIONS_CONTROL_PANEL: {
            PATH: 'type-educations-control-panel',
            API: {
                getEntries: `/activity-types`,
                deleteEntry: (id: string) => `/activity-types/${id}`,
                deleteEntries: `/activity-types`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить тип занятий",
                HEADER_UPDATE: "Изменить тип занятий",
                API: {
                    getEntry: (id: string) => `/activity-types/${id}`,
                    addEntry: `/activity-types`,
                    updateEntry: (id: string) => `/activity-types/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Название типа занятий",
                        type: "text",
                        name: "typeName",
                        required: true,
                    }
                ],
            },
            DATA_TYPE: {} as IActivityType
        },

        GROUPS_CONTROL_PANEL: {
            PATH: 'groups-control-panel',
            API: {
                getEntries: `/groups`,
                deleteEntry: (id: string) => `/groups/${id}`,
                deleteEntries: `/groups`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить группу",
                HEADER_UPDATE: "Изменить группу",
                API: {
                    getEntry: (id: string) => `/groups/${id}`,
                    addEntry: `/groups`,
                    updateEntry: (id: string) => `/groups/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Название группы",
                        type: "text",
                        name: "groupName",
                        required: true,
                    },
                ],
            },
            DATA_TYPE: {} as IGroup
        },


        TEACHERS_CONTROL_PANEL: {
            PATH: 'teachers-control-panel',
            API: {
                getEntries: `/teachers`,
                deleteEntry: (id: string) => `/teachers/${id}`,
                deleteEntries: `/teachers`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить преподавателя",
                HEADER_UPDATE: "Изменить преподавателя",
                API: {
                    getEntry: (id: string) => `/teachers/${id}`,
                    addEntry: `/teachers`,
                    updateEntry: (id: string) => `/teachers/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Полное имя",
                        type: "text",
                        name: "fullName",
                        required: true,
                    }
                ],
            },
            DATA_TYPE: {} as ITeacher
        },

        CLASSROOMS_CONTROL_PANEL: {
            PATH: 'classrooms-control-panel',
            API: {
                getEntries: `/class-rooms`,
                deleteEntry: (id: string) => `/class-rooms/${id}`,
                deleteEntries: `/class-rooms`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить аудиторию",
                HEADER_UPDATE: "Изменить аудиторию",
                API: {
                    getEntry: (id: string) => `/class-rooms/${id}`,
                    addEntry: `/class-rooms`,
                    updateEntry: (id: string) => `/class-rooms/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Название аудитории",
                        type: "text",
                        name: "classRoomName",
                        required: true,
                    }
                ],
            },
            DATA_TYPE: {} as IClassRoom
        },

        DISCIPLINES_CONTROL_PANEL: {
            PATH: 'disciplines-control-panel',
            API: {
                getEntries: `/disciplines`,
                deleteEntry: (id: string) => `/disciplines/${id}`,
                deleteEntries: `/disciplines`,
            },
            CRUD_FORM: {
                HEADER_ADD: "Добавить дисциплину",
                HEADER_UPDATE: "Изменить дисциплину",
                API: {
                    getEntry: (id: string) => `/disciplines/${id}`,
                    addEntry: `/disciplines`,
                    updateEntry: (id: string) => `/disciplines/${id}`,
                },
                INPUTS: [
                    {
                        placeholder: "Название дисциплины",
                        type: "text",
                        name: "disciplineName",
                        required: true,
                    }
                ],
            },
            DATA_TYPE: {} as IDiscipline
        },
    },
};

export const HELLO_PANEL_TEXT = "Чтобы начать работу с веб-приложением, воспользуйтесь навигационной панелью.";

export const ERRORS_INFO = {
    FETCH_DATA_ERROR: "Ошибка получения данных, обратитесь к администратору.",
    ADD_DATA_ERROR: "Ошибка добавления данных, обратитесь к администратору.",
    UPDATE_DATA_ERROR: "Ошибка изменения данных, обратитесь к администратору.",
    DELETE_DATA_ERROR: "Ошибка удаления данных, обратитесь к администратору.",
};

export const KEYS_SYNONYMS: KeySynonyms = {
    id: "Номер",
    discipline: "Дисциплина",
    group: "Группа",
    teacher: "Преподаватель",
    activityType: "Тип занятий",
    subGroup: "Подгруппа",
    classRoom: "Аудитория",
    activityYearHours: "Часы",

    date: "Дата",
    activitiesList: "Список занятий",
    
    
    disciplineName: "Дисциплина",
    groupName: "Группа",
    classRoomName: "Аудитория",
    fullName: "Преподаватель",
};