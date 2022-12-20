import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/modules/post/models/post";
import { environment } from "src/environments/environment";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.pug",
  styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  id?: number;
  post?: Post;
  private sub: any;

  imageUrl: string = environment.BASE_URL;
  constructor(private route: ActivatedRoute,
    private postFacade: PostFacadeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
        this.postFacade.getById(this.id).subscribe(data => this.post = data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ratingUp() {
    console.log("Rating up");
  }
  ratingDown() {
    console.log("Rating down");
  }
  likePost() {
    console.log("Like Post");
  }
  commentPost() {
    console.log("Comment Post");
  }
}
