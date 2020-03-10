import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { UserResponse } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['victorcmggg@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  authentication() {
    const { email, password } = this.loginForm.value
    this.userService.authentication(email, password).subscribe( (result: UserResponse) => {
      this.tokenService.saveToken(result.token);
      this.userService.saveUser(result.user);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error)
    })
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

}
