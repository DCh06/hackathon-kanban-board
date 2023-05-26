import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IKanbanTask } from '../utils/kanban-task.model';

export interface KanbanTaskState extends EntityState<IKanbanTask, number> { }

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'kanban-tasks' })
export class KanbanTaskStore extends EntityStore<KanbanTaskState> {
  constructor() {
    super() ;
  }
}