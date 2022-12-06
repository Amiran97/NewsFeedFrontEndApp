import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent, LoginComponent, RegisterComponent],
  exports: [HeaderComponent, LoginComponent, RegisterComponent],
})
export class ComponentsModule {}
