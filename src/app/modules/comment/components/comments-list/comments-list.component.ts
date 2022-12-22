import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Comment } from "../../models/comment";
import { CommentFacadeService } from "../../services/comment-facade.service";

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.pug",
  styleUrls: ["./comments-list.component.scss"],
})
export class CommentsListComponent implements OnInit, OnDestroy {
  commentsList$: Observable<Comment[]> = this.commentFacade.comments$;
  @Input() id?: number;
  private commentsSub: any;

  constructor(private commentFacade: CommentFacadeService,
    public accountFacade: AccountFacadeService) {}

  ngOnInit() {
    if(this.id) {
      this.commentsSub = this.commentFacade.getByPostId(this.id).subscribe(data => {});
    }
  }

  ngOnDestroy(): void {
    this.commentsSub.unsubscribe();
  }
}