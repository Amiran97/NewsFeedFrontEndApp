import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
  ],
})
export class ComponentsModule {}
