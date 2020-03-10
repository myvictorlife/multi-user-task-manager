import { Injectable } from '@angular/core';
import { User } from '.././/models/user';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  constructor(private tokenService: TokenService, private http: HttpClient) {
    this.loadUser();
   }

   loadUser() {
     const user = localStorage.getItem('user');
     this.user = JSON.parse(user);
   }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  authentication(email: string, password: string) {
    const url = `${environment.base_url}/auth/authenticate`;
    return this.http.post(url, { email, password});
  }

  create(user: User) {
    const url = `${environment.base_url}/auth/register`;
    return this.http.post(url, user);
  }

  checkAuth() {
    // Rules If Login
    return this.tokenService.getToken() ? true : false;
  }

  getUser() {
    return this.user;
  }

  logout() {
    localStorage.clear();
  }

}
