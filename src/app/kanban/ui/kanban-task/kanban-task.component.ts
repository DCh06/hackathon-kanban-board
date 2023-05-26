import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { CreateEditKanbanTaskDialogComponent } from '../../feature/create-edit-kanban-task-dialog/create-edit-kanban-task-dialog.component';
import { IKanbanTask, KanbanTaskField } from '../../utils/kanban-task.model';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.scss']
})
export class KanbanTaskComponent {

  public fieldEnum = KanbanTaskField;

  @Input() task: IKanbanTask;

  constructor(
    private dialog: Dialog
  ) {}


  openCreateModal() {
    this.dialog.open(CreateEditKanbanTaskDialogComponent, {data: {sectionId: this.task.sectionId, task: this.task}});
  }
}
