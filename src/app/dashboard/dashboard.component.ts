import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myProjects: Array<Project>;
  project = {} as Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.findProjects();
  }

  findProjects() {
    this.projectService.get().subscribe( (result: Array<Project>) => {
      this.myProjects = result;
    });
  }

  createProject() {
    this.projectService.create(this.project).subscribe( result => {
      this.project = {} as Project;
      this.findProjects();
    }, error => {
      console.log(error);
    })
  }

}
