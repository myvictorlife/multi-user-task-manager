import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../models/task';
import { EditTaskComponent } from '../dialogs/edit-task/edit-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() category;
  @Input() project;

  @Output() projectChange = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.project.tasks = this.project.tasks.filter( x => x._id !== task._id);
    this.projectService.update(this.project).subscribe( () =>{
     this.snackBar.open('Project Removed Successfully', 'Undo', { duration: 3000 })
     this.projectChange.emit(true);
    });
  }

  openDialogToEdit(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '250px',
      data: { headerName: 'Edit Task', title: task.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        task.title = result.title;
        task.status = result.status;
      }
      this.update();
    });
  }

  update() {
    this.projectService.update(this.project).subscribe( result => {
      console.log(result);
      this.snackBar.open('Updated Successfully', 'Undo', { duration: 3000 });
    }, error => {
      console.log(error);
    });
  }

  formatDate(dateStr: string) {
    //console.log(this.datepipe.transform(dateStr, 'yyyy/MM/dd'));
    return 'Date Init: 10/15/2020';
  }

}


// {
//   "completed": false,
//   "_id": "5e67a8bf1315bc3e997a1be9",
//   "title": "Nova tarefa 2",
//   "assignedTo": "5e674c7d305d590d8db0371a",
//   "project": "5e67a8bf1315bc3e997a1be8",
//   "createAt": "2020-03-10T14:48:31.220Z",
//   "__v": 0
// }