import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Comment } from "../../models/comment";
import { CommentFacadeService } from "../../services/comment-facade.service";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.pug",
  styleUrls: ["./comment-item.component.scss"],
})
export class CommentItemComponent {
  @Input() comment?: Comment;

  constructor(public accountFacade: AccountFacadeService,
    private commentFacade: CommentFacadeService) {}

  deleteComment() {
    if(this.comment?.id) {
      this.commentFacade.delete(this.comment.id).subscribe(id => {});
    }
  }

  ratingUp() {
    console.log("Rating up");
  }
  ratingDown() {
    console.log("Rating down");
  }
  likeComment() {
    console.log("Like Comment");
  }
}
