import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { AccountMenuComponent } from "./components/account-menu/account-menu.component";


@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    AccountMenuComponent
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
  ],
})
export class SharedModule {}