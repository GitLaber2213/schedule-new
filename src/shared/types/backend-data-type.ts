export interface ITariffication {
    id: number;
    disciplineName: string;
    group: string;
    teacher: string;
    activityType: string;
    subGroup: string;
    activityYearHours: number;
}

export interface IGroup {
    id: number;
    groupName: string;
}

export interface IActivityType {
    id: number;
    activityType: string;
}

export interface ITeacher {
    id: number;
    fullName: string;
}

export interface IClassRoom {
    id: number;
    classRoomName: string;
}

export interface IDiscipline {
    id: number;
    disciplineName: string;
}