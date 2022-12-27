import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "post",
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) 
  },
  {
    path: "account",
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) 
  },
  {
    path: "**",
    redirectTo: 'post'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
