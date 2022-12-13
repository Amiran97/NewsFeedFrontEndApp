import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostItemComponent } from "./post-item/post-item.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    PostsListComponent,
    PostItemComponent,
    SideBarComponent,
  ],
  exports: [
    HeaderComponent,
    PostsListComponent,
    PostItemComponent,
    SideBarComponent,
  ],
})
export class ComponentsModule {}
