import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent, SideBarComponent],
  exports: [HeaderComponent, SideBarComponent],
})
export class ComponentsModule {}
