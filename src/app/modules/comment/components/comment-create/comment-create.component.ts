import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { CommentRequest } from "../../models/comment-request";
import { CommentFacadeService } from "../../services/comment-facade.service";

@Component({
  selector: "app-comment-create",
  templateUrl: "./comment-create.component.pug",
  styleUrls: ["./comment-create.component.scss"],
})
export class CommentCreateComponent implements OnInit {
  @Input() id?: number;
  commentForm?: FormGroup;
  get message() { return this.commentForm?.get('message'); }

  constructor(public accountFacade: AccountFacadeService,
    private commentFacade: CommentFacadeService,
    private toaster: ToastService) {}

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      message: new FormControl(null, [
        Validators.required, 
        Validators.maxLength(255)
      ])
    });
  }

  onSubmit() {
    if(this.commentForm && this.id) {
      let comment: CommentRequest ={ message: this.commentForm.value.message};
      this.commentFacade.create(this.id, comment).subscribe(
        () => {
          this.toaster.showSuccess('Comment created!')
        },
        error => {
          if(error.status == 400) {
            this.toaster.showError("Comment can't create!");
          }
        }
      );
    }
  }
}
