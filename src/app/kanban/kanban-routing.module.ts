import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KanbanBoardComponent } from "./feature/kanban-board/kanban-board.component";
import { KanbanSettingsComponent } from "./feature/kanban-settings/kanban-settings.component";

const routes: Routes = [
    { path: '', redirectTo: 'board', pathMatch: 'full' },
    { path: 'board', component: KanbanBoardComponent },
    { path: 'settings', component: KanbanSettingsComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class KanbanRoutingModule {

}