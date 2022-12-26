import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmValidator } from "src/app/core/validators/confirm.validator";
import { ToastService } from "src/app/shared/services/toast.service";
import { AccountFacadeService } from "../../services/account-facade.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.pug",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {

  registerForm: FormGroup;

  get userName() { return this.registerForm.get('userName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  constructor(private accountFacade: AccountFacadeService,
    private router: Router,
    private toaster: ToastService) {
    if(this.accountFacade.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.registerForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(32),
        Validators.pattern('^[a-zA-Z]{1}(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{3,31}$')
      ]),
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
      ),
      confirmPassword: new FormControl("", 
        [
          Validators.required,
          Validators.minLength(8), 
          Validators.maxLength(32),
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,32}$')
        ]
      )
    }, {
      validators: [ConfirmValidator.sameValues('password', 'confirmPassword')],
      updateOn: 'change'
    });
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.accountFacade.register(this.registerForm.value).subscribe(
        tokens => {
          this.toaster.showSuccess('New account created!')
          this.router.navigate(['/']);
        },
        error => {
          if(error.status == 400) {
            this.toaster.showError('User is already taken!');
          }
        }
      );
    }
  }
}
