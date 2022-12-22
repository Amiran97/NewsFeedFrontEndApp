import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateEditComponent } from './components/post-create-edit/post-create-edit.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'create', component: PostCreateEditComponent },
  { path: 'edit/:id', component: PostCreateEditComponent },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }