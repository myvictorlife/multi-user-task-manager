import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myProjects: Array<Project>;


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.myProjects = this.projectService.get();
  }

  findProjects() {

  }

}
