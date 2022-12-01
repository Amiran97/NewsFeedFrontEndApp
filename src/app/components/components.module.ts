import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostItemComponent } from "./posts-list/post-item/post-item.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent, PostsListComponent, PostItemComponent],
  exports: [HeaderComponent, PostsListComponent, PostItemComponent],
})
export class ComponentsModule {}
