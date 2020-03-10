import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../dialogs/edit-project/edit-project.component';
import { Task } from '../../models/task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() category;
  @Input() project;

  @Output() projectChange = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService, public dialog: MatDialog, private _snackBar: MatSnackBar,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.project.tasks = this.project.tasks.filter( x => x._id !== task._id);
    this.projectService.update(this.project).subscribe( () =>{
     this._snackBar.open('Project Removed Successfully', 'Undo', { duration: 3000 })
     this.projectChange.emit(true);
    });
  }

  openDialogToEdit(task: Task): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '250px',
      data: { headerName: 'Edit Task', title: task.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        task.title = result
      }
      this.update();
    });
  }

  update() {
    this.projectService.update(this.project).subscribe( result => {
      console.log(result);
      this._snackBar.open('Updated Successfully', 'Undo', { duration: 3000 });
    }, error => {
      console.log(error);
    });
  }

  formatDate(dateStr: string) {
    //console.log(this.datepipe.transform(dateStr, 'yyyy/MM/dd'));
    return 'Date Init: 10/15/2020';
  }

}
