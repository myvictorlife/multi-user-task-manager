import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  get() {
    return [{
      "id" : "1",
      "description" : "Loren ipsum dolor sit amet",
      "status" : 'todo',
      "cration_date" : "09/03/2020",
      "finish_date" : "10/03/2020"
    },{
      "id" : "2",
      "description" : "Loren ipsum dolor sit amet",
      "status" : 'todo',
      "cration_date" : "09/03/2020",
      "finish_date" : "11/03/2020"
    },{
      "id" : "3",
      "description" : "Loren ipsum dolor sit amet",
      "status" : 'todo',
      "cration_date" : "09/03/2020",
      "finish_date" : "11/03/2020"
    },{
      "id" : "4",
      "description" : "Loren ipsum dolor sit amet",
      "status" : 'done',
      "cration_date" : "09/04/2020",
      "finish_date" : "10/04/2020"
    },{
      "id" : "5",
      "description" : "Loren ipsum dolor sit amet",
      "status" : 'done',
      "cration_date" : "09/05/2020",
      "finish_date" : "10/05/2020"
    }];
  }
}
