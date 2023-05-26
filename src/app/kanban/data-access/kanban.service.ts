import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { apiUrl } from "src/app/core/utils/api-url";
import { IKanbanTask } from "../utils/kanban-task.model";
import { KanbanColumnStore } from "./kanban-column.store";
import { KanbanTaskStore } from "./kanban-task.store";
@Injectable({
  providedIn: "root"
})
export class KanbanService {

  // mockToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2ODYzMDg1MDMsImlkIjoiM251ODBhZnBlbHQ1azNkIiwidHlwZSI6ImF1dGhSZWNvcmQifQ.mCa7k4w2dpfkmD0bSmTIAZNQYZCPS6CJDgfiYOE7qEM";



  constructor(
    private http: HttpClient,
    private kanbanSectionStore: KanbanColumnStore,
    private kanbanTaskStore: KanbanTaskStore
  ) {
  }

  getSections() {
    return this.http.get(`${apiUrl}/sections/records`, { params: new HttpParams().set("expand", "tasks") })
      .pipe(
        map((res: any) => { return res.items }),
        tap(sections => {
          this.kanbanSectionStore.set(sections);
        })
      );
  }

  loadTasks() {
    return this.http.get(`${apiUrl}/tasks/records`).pipe(
      map((res: any) => { return res.items }),
      tap(tasks => {
        this.kanbanTaskStore.set(tasks);
      })
    )
  }

  saveTask(req: IKanbanTask) {
    return this.http.post(`${apiUrl}/tasks/records`, req).pipe(
      tap((task: any) => {
        this.kanbanTaskStore.add(task)
      })
    );
  }

  editTask(req: IKanbanTask) {
    return this.http.patch(`${apiUrl}/tasks/records/${req.id}`, req).pipe(
      tap((task: any) => {
        this.kanbanTaskStore.update(req.id, task)
      })
    )
  }
}
