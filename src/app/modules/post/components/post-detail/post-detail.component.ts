import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
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

  private routeSub: any;
  private postSub: any;

  imageUrl: string = environment.IMAGE_URL;
  constructor(private route: ActivatedRoute,
    private postFacade: PostFacadeService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.postSub = this.postFacade.getById(this.id).subscribe(data => this.post = data);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.postSub.unsubscribe();
  }
}
