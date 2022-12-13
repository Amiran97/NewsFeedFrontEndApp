import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.pug",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm?: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      confPassword: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    console.log(this.registerForm?.value);
  }
}
