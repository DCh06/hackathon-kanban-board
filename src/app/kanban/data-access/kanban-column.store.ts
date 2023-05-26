import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IKanbanColumn } from '../utils/kanban-column.model';

export interface KanbanColumnState extends EntityState<IKanbanColumn, number> { }

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'kanban-columns' })
export class KanbanColumnStore extends EntityStore<KanbanColumnState> {
  constructor() {
    super() ;
  }
}