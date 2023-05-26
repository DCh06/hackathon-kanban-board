import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditKanbanTaskDialogComponent } from './create-edit-kanban-task-dialog.component';

describe('CreateKanbanTaskDialogComponent', () => {
  let component: CreateEditKanbanTaskDialogComponent;
  let fixture: ComponentFixture<CreateEditKanbanTaskDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditKanbanTaskDialogComponent]
    });
    fixture = TestBed.createComponent(CreateEditKanbanTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
