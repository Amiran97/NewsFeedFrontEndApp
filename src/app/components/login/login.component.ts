import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.pug",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  authForm?: FormGroup;

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      login: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    console.log(this.authForm?.value);
  }
}
