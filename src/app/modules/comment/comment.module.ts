import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';

@NgModule({
    declarations: [
      CommentsListComponent,
      CommentItemComponent,
      CommentCreateComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    exports: [
      CommentsListComponent
    ]
  })
  export class CommentModule { }