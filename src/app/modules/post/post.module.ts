import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostRoutingModule } from './post-router.module';
import { PostCreateEditComponent } from './components/post-create-edit/post-create-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [
    PostsListComponent,
    PostItemComponent,
    PostCreateEditComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CommentModule
  ]
})
export class PostModule { }