import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KanbanService } from '../../data-access/kanban.service';
import { IKanbanTask, KanbanTaskField } from '../../utils/kanban-task.model';

@Component({
  selector: 'app-create-edit-kanban-task-dialog',
  templateUrl: './create-edit-kanban-task-dialog.component.html',
  styleUrls: ['./create-edit-kanban-task-dialog.component.scss']
})
export class CreateEditKanbanTaskDialogComponent implements OnInit, AfterViewInit {

  expanded = false;

  fieldEnum = KanbanTaskField;

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) private data: {sectionId: string, task: IKanbanTask},
    private kanbanService: KanbanService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      field: [this.fieldEnum.LOW, Validators.required],
      description: ['']
    });

    if (this.data.task) {
      this.form.patchValue(this.data.task);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.expanded = true);
  }

  get f() {
    return this.form.controls;
  }

  close() {
    this.expanded = false;
    setTimeout(() => {
      this.dialogRef.close();
    }, 300);
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }



    if (this.data.task) {
      const req = {
        ...this.data.task,
        ...this.form.value
      }
      this.kanbanService.editTask(req).subscribe(() => this.close());
    } else {
      const req = {
        ...this.form.value,
        sectionId: this.data.sectionId
      };
      this.kanbanService.saveTask(req).subscribe(() => this.close());
    }

  }
}
