import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanColumnComponent } from './ui/kanban-column/kanban-column.component';
import { KanbanTaskComponent } from './ui/kanban-task/kanban-task.component';
import { KanbanBoardComponent } from './feature/kanban-board/kanban-board.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KanbanSettingsComponent } from './feature/kanban-settings/kanban-settings.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { CreateEditKanbanTaskDialogComponent } from './feature/create-edit-kanban-task-dialog/create-edit-kanban-task-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    KanbanColumnComponent,
    KanbanTaskComponent,
    KanbanBoardComponent,
    KanbanSettingsComponent,
    CreateEditKanbanTaskDialogComponent
  ],
  imports: [
    KanbanRoutingModule,
    CommonModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports: [
    KanbanTaskComponent,
    KanbanColumnComponent,
    KanbanBoardComponent,
    KanbanSettingsComponent
  ]
})
export class KanbanModule { }
