import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  tasks: Array<Task>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.get();
  }

}
