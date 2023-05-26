import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { KanbanColumnState, KanbanColumnStore } from './kanban-column.store';

@Injectable({providedIn: 'root'})
export class KanbanColumnQuery extends QueryEntity<KanbanColumnState> {
  constructor(protected override store: KanbanColumnStore) {
    super(store);
  }
}