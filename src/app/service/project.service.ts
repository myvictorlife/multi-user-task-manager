import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  get(): Observable<Array<Project>> {
    const url = `${environment.base_url}/projects/user-projects`;
    return this.http.get<any>(url).pipe(
      map( response => {
        return response.projects;
      })
    );
  }

  create(project: Project) {
    const url = `${environment.base_url}/projects`;
    return this.http.post(url, project);
  }

  update(project: Project): Observable<Project> {
    const url = `${environment.base_url}/projects/${project._id}`;
    return this.http.put<any>(url, project).pipe(
      map( response => {
        return response.project;
      })
    );
  }

  delete(id: string) {
    const url = `${environment.base_url}/projects/${id}`;
    return this.http.delete<any>(url);
  }
}

// {
//   "project": {
//     "tasks": [
//       {
//         "completed": false,
//         "_id": "5e6755839df24d11711ab7df",
//         "title": "Nova tarefa 2",
//         "assignedTo": "5e674c7d305d590d8db0371a",
//         "project": "5e6755839df24d11711ab7de",
//         "createAt": "2020-03-10T08:53:23.295Z",
//         "__v": 0
//       },
//       {
//         "completed": false,
//         "_id": "5e6755839df24d11711ab7e0",
//         "title": "Outra tarefa",
//         "assignedTo": "5e674c7d305d590d8db0371a",
//         "project": "5e6755839df24d11711ab7de",
//         "createAt": "2020-03-10T08:53:23.296Z",
//         "__v": 0
//       }
//     ],
//     "_id": "5e6755839df24d11711ab7de",
//     "title": "Outro Projeto 1",
//     "description": "Description of project",
//     "user": "5e66e14a77211c29571dd87d",
//     "createAt": "2020-03-10T08:53:23.284Z",
//     "__v": 1
//   }
// }