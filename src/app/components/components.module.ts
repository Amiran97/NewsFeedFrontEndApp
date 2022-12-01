import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class ComponentsModule {}
