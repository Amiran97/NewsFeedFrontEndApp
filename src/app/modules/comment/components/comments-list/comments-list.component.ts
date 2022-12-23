import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    public accountFacade: AccountFacadeService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.id) {
      this.commentsSub = this.commentFacade.getByPostId(this.id).subscribe(data => {
        this.route.fragment.subscribe(fragment => {
          if(fragment) {
            setTimeout(() => {
              try {
                document.querySelector('#' + fragment)?.scrollIntoView();
              } catch (e) {
              }
            }, 1);
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.commentsSub.unsubscribe();
  }
}