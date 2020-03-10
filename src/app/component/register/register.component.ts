import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfirmPassword } from '../../validator/confirm-passsword';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { Router } from '@angular/router';
import { TokenService } from '../../../app/service/token.service';
import { UserResponse } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private _snackBar: MatSnackBar, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: ConfirmPassword('password', 'confirmPassword')
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: message
    });
  }

  // getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.userService.create(this.registerForm.value).subscribe( (result: UserResponse) => {
      this.tokenService.saveToken(result.token);
      this.userService.saveUser(result.user);

      this.router.navigate(['/dashboard']);
    }, error => {
      this.openSnackBar(error ? error.error.error : 'Server Error');
    });
  }
}
