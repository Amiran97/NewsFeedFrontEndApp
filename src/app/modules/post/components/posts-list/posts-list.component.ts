import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostsService } from "src/app/modules/post/services/posts.service";
import { Post } from "src/app/modules/post/models/post";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.pug",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  constructor(private postService: PostsService) {}

  postsList$: Observable<Post[]> = this.postService.postsList$;

  ngOnInit() {}
}
