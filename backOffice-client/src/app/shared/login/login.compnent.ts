import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nb-login',
  templateUrl:"./login.component.html"
})
export class NbLoginComponent {
  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {
    username:"",
    password:""
  };
  submitted: boolean = false;
  public form: FormGroup;
  constructor(
    fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  public onSubmit(): void {
    this.submitted = true;
    this.DoLogin(this.user.username, this.user.password);
  }
  DoLogin(username, password) {
    this.errors = [];
    this.authenticationService.signin(username, password)
      .then(
      (x) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.submitted = false;
        if (error != "") {
          const body: any = error.json();

          switch (body.message) {
            case "Authentication failed. User not found.":
              this.errors.push("username password error");
              break;
            default:
              this.errors.push("conection error, Try again");
          }
        } else {

          // const errMsg = (error.message) ? error.message :
          //   error.status ? `${error.status} - ${error.statusText}` : "Server error";
          console.log("errMsg");
          this.errors.push("Server error. Try later.");
        }
      });
  }
}