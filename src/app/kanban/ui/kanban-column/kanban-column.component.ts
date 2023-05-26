import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanTaskQuery } from '../../data-access/kanban-task.query';
import { CreateEditKanbanTaskDialogComponent } from '../../feature/create-edit-kanban-task-dialog/create-edit-kanban-task-dialog.component';
import { IKanbanColumn } from '../../utils/kanban-column.model';
import { IKanbanTask } from '../../utils/kanban-task.model';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {
  @Input() column: IKanbanColumn;

  tasks$: Observable<IKanbanTask[]>;

  constructor(
    private dialog: Dialog,
    private kanbanTaskQuery: KanbanTaskQuery
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.kanbanTaskQuery.selectAllBySectionId(this.column.id);
  }

  openCreateModal() {
    this.dialog.open(CreateEditKanbanTaskDialogComponent, {data: {sectionId: this.column.id}});
  }

}
