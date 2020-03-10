import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { UserResponse } from '../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private tokenService: TokenService,
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  authentication() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value
    this.userService.authentication(email, password).subscribe( (result: UserResponse) => {
      this.tokenService.saveToken(result.token);
      this.userService.saveUser(result.user);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error)
      this.openSnackBar(error ? error.error.error : 'Server Error');
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: message
    });
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

}
