import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../account/guards/auth.guard';
import { PostCreateEditComponent } from './components/post-create-edit/post-create-edit.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'newest/1' },
  { path: 'newest/:page', component: PostsListComponent },
  { path: 'popular/:page', component: PostsListComponent },
  { path: 'create', component: PostCreateEditComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: PostCreateEditComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: '**', redirectTo: 'newest/1'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }