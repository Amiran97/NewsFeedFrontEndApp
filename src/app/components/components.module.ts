import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
