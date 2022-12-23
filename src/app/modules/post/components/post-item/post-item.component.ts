import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { environment } from "src/environments/environment";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.pug",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit, OnDestroy {
  @Input() post?: Post;
  @Output() navToNextPost: EventEmitter<number> = new EventEmitter<number>();
  imageUrl: string = environment.IMAGE_URL;
  isCollapsed: boolean = false;
  isDetail: boolean = false;
  private routeSub: any;
  private deleteSub: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public accountFacade: AccountFacadeService,
    private postFacade: PostFacadeService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      let id = +params['id'];
      if(id) {
        this.isDetail = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.deleteSub?.unsubscribe();
  }

  deletePost() {
    if(this.post?.id) {
      this.deleteSub = this.postFacade.delete(this.post.id).subscribe(id => {
        if(this.isDetail) {
          this.router.navigate(['/']);
        }
      });
    }
  }

  navigateToDetailClick() {
    this.router.navigate(['/', this.post?.id]);
  }

  navigateToCommentPost() {
    if(this.post?.id) {
      if(this.isDetail) {
        document.querySelector("#comments")?.scrollIntoView();
      } else {
        this.router.navigate(['/', this.post?.id], {fragment: 'comments'});
      }
    }
  }

  navigateToEditPost() {
    if(this.post?.id) {
      this.router.navigate(['/edit', this.post?.id]);
    }
  }

  navToNextPostClick() {
    if(this.post) {
      this.navToNextPost.emit(this.post.id);
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
}
