import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import { ProjectService } from 'src/app/service/project.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../dialogs/edit-project/edit-project.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  tasks: Array<Task>;
  newTask = {} as Task;

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

  constructor(private projectService: ProjectService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const tasks = this.project.tasks;

    for(let category of this.categories){
      this.tasks = tasks.filter( task => {
        if (task.status === category.status){
          category.tasks.push(task)
        }
      })
    }
  }

  addTask() {
    if(this.newTask && this.newTask.title) {
      this.newTask.status = 'To Do';
      this.project.tasks.push(this.newTask);
      this.projectService.update(this.project).subscribe( result => {
        this.project = result;
      }, error => {
        console.log(error);
      })
    }
  }

  edit(title: string) {
    this.project.title = title;
    this.projectService.update(this.project).subscribe( result => {
      console.log(result)
      this.project = undefined;
    })
  }

  delete() {
    this.projectService.delete(this.project._id).subscribe( result => {
      console.log(result);
      this.openSnackBar('Successfully removed.');
    })
  }

  openDialogToEdit(): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '250px',
      data: { headerName: 'Edit Profile', title: this.project.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.edit(result);
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: message
    });
  }

}
