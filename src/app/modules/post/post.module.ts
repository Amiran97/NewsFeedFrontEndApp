import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostRoutingModule } from './post-router.module';

@NgModule({
  declarations: [
    PostsListComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostModule { }