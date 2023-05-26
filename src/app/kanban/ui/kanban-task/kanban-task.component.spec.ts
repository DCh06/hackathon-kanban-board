import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTaskComponent } from './kanban-task.component';

describe('KanbanTaskComponent', () => {
  let component: KanbanTaskComponent;
  let fixture: ComponentFixture<KanbanTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanTaskComponent]
    });
    fixture = TestBed.createComponent(KanbanTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
