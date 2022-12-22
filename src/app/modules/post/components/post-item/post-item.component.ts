import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { environment } from "src/environments/environment";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.pug",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent {
  @Input() post?: Post;
  imageUrl: string = environment.IMAGE_URL;
  isCollapsed: boolean = false;

  constructor(private router: Router,
    public accountFacade: AccountFacadeService,
    private postFacade: PostFacadeService) {}

  navigateToDetailClick() {
    this.router.navigate(['/', this.post?.id]);
  }

  deletePost() {
    if(this.post?.id) {
      this.postFacade.delete(this.post.id).subscribe(id => {});
    }
  }

  navigateToEditPost() {
    if(this.post?.id) {
      this.router.navigate(['/edit', this.post?.id]);
    }
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
