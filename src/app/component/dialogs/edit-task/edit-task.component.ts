import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  categories = [{
    status: 'To Do',
    tasks: [],
    color: '#448AFF'
  }, {
    status: 'Test',
    tasks: [],
    color: '#EF6C00'
  }, {
    status: 'Done',
    tasks: [],
    color: '#69F0AE'
  }];

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
