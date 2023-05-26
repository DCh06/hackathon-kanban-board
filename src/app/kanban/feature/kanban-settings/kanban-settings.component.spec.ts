import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanSettingsComponent } from './kanban-settings.component';

describe('KanbanSettingsComponent', () => {
  let component: KanbanSettingsComponent;
  let fixture: ComponentFixture<KanbanSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanSettingsComponent]
    });
    fixture = TestBed.createComponent(KanbanSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
