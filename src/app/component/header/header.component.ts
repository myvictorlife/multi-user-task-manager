import { Component, OnInit } from '@angular/core';
import { User } from '../../../app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    location.reload();
  }

}
