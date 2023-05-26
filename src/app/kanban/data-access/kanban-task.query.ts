import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { KanbanTaskState, KanbanTaskStore } from './kanban-task.store';

@Injectable({providedIn: 'root'})
export class KanbanTaskQuery extends QueryEntity<KanbanTaskState> {
  constructor(protected override store: KanbanTaskStore) {
    super(store);
  }

  selectAllBySectionId(id: string) {
    return this.selectAll({filterBy: ({ sectionId }) => id === sectionId});
  }
}