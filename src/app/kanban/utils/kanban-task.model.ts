export interface IKanbanTask {
    collectionId: string;
    collectionName: string;
    created: string;
    id: number;
    sectionId: string;
    field: KanbanTaskField;
    description: string[];
    title: string;
    updated: string;
}

export enum KanbanTaskField {
    LOW = 'low',  MEDIUM = 'medium',  HIGH = 'high'
}