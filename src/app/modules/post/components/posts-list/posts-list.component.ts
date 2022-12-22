import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.pug",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  constructor(private postFacade: PostFacadeService,
    public accountFacade: AccountFacadeService) {}

  postsList$: Observable<Post[]> = this.postFacade.posts$;

  ngOnInit() {}
}