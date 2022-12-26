import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Comment } from "src/app/modules/comment/models/comment";
import { CommentFacadeService } from "src/app/modules/comment/services/comment-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { ToastService } from "src/app/shared/services/toast.service";
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
  isLiked: boolean = false;
  isDisliked: boolean = false;
  comments?: Comment[];

  private routeSub: any;
  private deleteSub: any;
  private likeSub: any;
  private dislikeSub: any;
  private commentsSub: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public accountFacade: AccountFacadeService,
    private postFacade: PostFacadeService,
    private commentFacade: CommentFacadeService,
    private toaster: ToastService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      let id = +params['id'];
      if(id) {
        this.isDetail = true;
        this.commentsSub = this.commentFacade.comments$.subscribe(data => this.comments = data);
      }
    });
    this.checkLikeStatus();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.deleteSub?.unsubscribe();
    this.likeSub?.unsubscribe();
    this.dislikeSub?.unsubscribe();
    this.commentsSub?.unsubscribe();
  }

  deletePost() {
    if(this.post?.id) {
      this.deleteSub = this.postFacade.delete(this.post.id).subscribe(id => {
        if(this.isDetail) {
          this.toaster.showSuccess('Post deleted!');
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
    if(this.post) {
      this.likeSub = this.postFacade.like(this.post.id).subscribe(data => {
        this.post = data;
        this.checkLikeStatus();
      });
    }
  }
  ratingDown() {
    if(this.post) {
      this.dislikeSub = this.postFacade.dislike(this.post.id).subscribe(data => {
        this.post = data;
        this.checkLikeStatus();
      });
    }
  }

  private checkLikeStatus() {
    this.accountFacade.account$.subscribe(account => {
      this.isLiked = this.post?.likes.findIndex(l => l === account.username) !== -1;
      this.isDisliked = this.post?.dislikes.findIndex(l => l === account.username) !== -1;
    });
  }
}
