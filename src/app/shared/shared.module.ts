import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { AccountMenuComponent } from "./components/account-menu/account-menu.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastsContainer } from "./components/toast-container/toast-container.component";


@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    AccountMenuComponent,
    ToastsContainer
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
  ],
})
export class SharedModule {}