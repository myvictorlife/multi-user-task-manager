import { Injectable } from '@angular/core';
import { User } from '.././/models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  authentication(email: string, password: string) {
    console.log(email, password);
  }

  create(user: User) {
    console.log(user)
    debugger
  }

  checkAuth() {
    // Rules If Login
    return true;
  }

  update() {
    // UPDATE USER
  }

}
