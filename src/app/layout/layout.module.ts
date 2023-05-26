import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { KanbanModule } from '../kanban/kanban.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //lator smazat
    KanbanModule
  ],
  exports: [
    HeaderComponent,
    BackgroundComponent
  ]
})
export class LayoutModule { }
