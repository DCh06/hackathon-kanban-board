import { IKanbanTask } from "./kanban-task.model";

export interface IKanbanColumn {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    order: string;
    tasks: string[];
    title: string;
    updated: string;
    expand: { tasks: IKanbanTask[]}
}