import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanColumnQuery } from '../../data-access/kanban-column.query';
import { KanbanService } from '../../data-access/kanban.service';
import { IKanbanColumn } from '../../utils/kanban-column.model';
import { IKanbanTask } from '../../utils/kanban-task.model';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  kanbanColumns$: Observable<IKanbanColumn[]>;

  constructor(
    private kanbanService: KanbanService,
    private kanbanColumnQuery: KanbanColumnQuery
  ) {}

  ngOnInit(): void {
    this.loadSections();
    this.loadTasks();
  }

  loadSections() {
    this.kanbanService.getSections().subscribe();
    this.kanbanColumns$ = this.kanbanColumnQuery.selectAll();
  }

  loadTasks() {
    this.kanbanService.loadTasks().subscribe();
  }

  onTaskDropped(ev: CdkDragDrop<any>) {
    const columnId = ev.container.data.id;
    
    const task = {
      ...ev.item.data as IKanbanTask,
      sectionId: columnId
    };

    this.kanbanService.editTask(task).subscribe();
  }



}
