import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { PostFacadeService } from "../../services/post-facade.service";
import * as _ from 'lodash';

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.pug",
  styleUrls: ["./post-create.component.scss"],
})
export class PostCreateComponent {
  selectedfiles: File[] = [];
  tags: string[] = [];
  postForm: FormGroup;

  get title() { return this.postForm.get('title'); }
  get content() { return this.postForm.get('content'); }
  get tag() { return this.postForm.get('tag'); }

  constructor(private postFacade: PostFacadeService,
    private accountFacade: AccountFacadeService,
    private router: Router) {
    if(!this.accountFacade.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required, 
        Validators.maxLength(100),
      ]),
      content: new FormControl(null, [
        Validators.required, 
        Validators.maxLength(255)
      ]),
      tag: new FormControl(null, [
        Validators.required,
        Validators.maxLength(32)
      ]),
    });
  }

  addTag() {
    if(this.tag?.valid && _.findIndex(this.tags, t => t === this.tag?.value) == -1) {
      this.tags.push(this.tag.value);
      this.tag.setValue('');
    }
  }
  
  removeTag(tag: string) {
    _.remove(this.tags, t => t === tag);
  }

  onFileChanged(event: any) {
    this.selectedfiles = event.target.files;
    console.log(this.selectedfiles);
    console.log(event.target.files[0]);
  }

  onSubmit() {
    if(this.title?.valid && this.content?.valid) {
      let formData = new FormData();
      formData.append("title", this.postForm.value.title);
      formData.append("content", this.postForm.value.content);
      _.forEach(this.tags, tag => formData.append("tags", tag));
      _.forEach(this.selectedfiles, file => formData.append("image", file));
      this.postFacade.create(formData).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          if(error.status == 400) {
            this.postForm?.setErrors({'create': `Post can't create!`})
          }
        }
      );
    }
  }

}
