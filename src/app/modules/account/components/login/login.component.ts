import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountFacadeService } from "../../services/account-facade.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.pug",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

  authForm: FormGroup;

  get email() { return this.authForm.get('email'); }
  get password() { return this.authForm.get('password'); }

  constructor(private accountFacade: AccountFacadeService,
    private router: Router) {
    if(this.accountFacade.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.authForm = new FormGroup({
      email: new FormControl(null, 
        [
          Validators.email, 
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(100)
        ]
      ),
      password: new FormControl("", 
        [
          Validators.required,
          Validators.minLength(8), 
          Validators.maxLength(32),
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,32}$')
        ]
      )
    });
  }

  onSubmit() {
    if(this.authForm.valid) {
      this.accountFacade.login(this.authForm.value).subscribe(
        tokens => {
          this.router.navigate(['/']);
        },
        error => {
          if(error.status == 400) {
            this.authForm?.setErrors({'auth': 'Email or password not correct!'})
          }
        }
      );
    }
  }
}