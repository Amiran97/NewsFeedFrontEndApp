import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Comment } from "../../models/comment";
import { CommentFacadeService } from "../../services/comment-facade.service";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.pug",
  styleUrls: ["./comment-item.component.scss"],
})
export class CommentItemComponent implements OnInit, OnDestroy{
  @Input() comment?: Comment;
  private likeSub: any;
  private dislikeSub: any;
  private deleteSub: any;
  isLiked: boolean = false;
  isDisliked: boolean = false;

  constructor(public accountFacade: AccountFacadeService,
    private commentFacade: CommentFacadeService) {}


  ngOnInit(): void {
    this.checkLikeStatus();
  }
  
  ngOnDestroy(): void {
    this.likeSub?.unsubscribe();
    this.dislikeSub?.unsubscribe();
    this.deleteSub?.unsubscribe();
  }

  deleteComment() {
    if(this.comment?.id) {
      this.deleteSub = this.commentFacade.delete(this.comment.id).subscribe();
    }
  }

  ratingUp() {
    if(this.comment) {
      this.likeSub = this.commentFacade.like(this.comment.id).subscribe(data => { 
        this.comment = data;
        this.checkLikeStatus();
      });
    }
  }
  ratingDown() {
    if(this.comment) {
      this.dislikeSub = this.commentFacade.dislike(this.comment.id).subscribe(data => { 
        this.comment = data;
        this.checkLikeStatus();
      });
    }
  }

  private checkLikeStatus() {
    this.accountFacade.account$.subscribe(account => {
      this.isLiked = this.comment?.likes.findIndex(l => l === account.username) !== -1;
      this.isDisliked = this.comment?.dislikes.findIndex(l => l === account.username) !== -1;
    });
  }
}
