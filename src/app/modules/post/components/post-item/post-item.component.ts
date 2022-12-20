import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "src/app/modules/post/models/post";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.pug",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent {
  @Input() post?: Post;
  imageUrl: string = environment.BASE_URL;
  constructor(private router: Router) {}

  navigateToDetailClick() {
    this.router.navigate(['/', this.post?.id]);
  }

  ratingUp() {
    console.log("Rating up");
  }
  ratingDown() {
    console.log("Rating down");
  }
  likePost() {
    this.navigateToDetailClick();
    console.log("Like Post");
  }
  commentPost() {
    this.navigateToDetailClick();
    console.log("Comment Post");
  }
}
