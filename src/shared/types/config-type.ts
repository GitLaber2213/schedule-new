export interface IConfig {
    PATH: string;
    API: {
        getEntries: string;
        deleteEntry: (id: string) => string;
        deleteEntries: string;
    };
    CRUD_FORM: {
        HEADER_ADD: string;  
        HEADER_UPDATE: string;  
        API: {
            getEntry: (id: string) => string;
            addEntry: string;
            updateEntry: (id: string) => string;
        };
        INPUTS: {
            placeholder: string;
            type: string;
            name: string;
            required: boolean;
        }[];
    },
    DATA_TYPE: {}; 
}

export interface KeySynonyms {
    id: string;
    discipline: string;
    group: string;
    teacher: string;
    activityType: string;
    subGroup: string;
    classRoom: string;
    activityYearHours: string;
    date: string;
    activitiesList: string;
    disciplineName: string;
    groupName: string;
    classRoomName: string;
    fullName: string;
  };