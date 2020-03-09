import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  get() {
    return [{
      'id' : '1',
      'name' : 'Project ABC',
      'cration_date' : '09/03/2020',
      'finish_date' : '10/03/2020',
    },{
      'id' : '2',
      'name' : 'Project XYZ',
      'cration_date' : '09/03/2020',
      'finish_date' : '11/03/2020'
    }];
  }
}
