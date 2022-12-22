import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { PostFacadeService } from "../../services/post-facade.service";
import * as _ from 'lodash';
import { environment } from "src/environments/environment";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create-edit.component.pug",
  styleUrls: ["./post-create-edit.component.scss"],
})
export class PostCreateEditComponent implements OnInit{
  selectedFiles: File[] = [];
  selectedFilesSrc: string[] = [];
  tags: string[] = [];
  postForm?: FormGroup;
  id?:number;
  isAddMode: boolean = true;
  imageUrl: string = environment.IMAGE_URL;
  oldImagesSrc?: string[];

  private sub: any;

  get title() { return this.postForm?.get('title'); }
  get content() { return this.postForm?.get('content'); }
  get tag() { return this.postForm?.get('tag'); }

  constructor(private postFacade: PostFacadeService,
    private accountFacade: AccountFacadeService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
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

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if(this.id) {
        this.isAddMode = false;
        this.postFacade.getById(this.id).subscribe(data => {
          this.title?.setValue(data.title);
          this.content?.setValue(data.content);
          this.tags = data.tags;
          this.oldImagesSrc = data.images;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
    this.selectedFiles = event.target.files;
    this.selectedFilesSrc.length = 0;
    _.forEach(this.selectedFiles, item => {
      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = () => {
        this.selectedFilesSrc.push(reader.result as string);
      };
    });
  }

  onSubmit() {
    if(this.postForm && this.title?.valid && this.content?.valid) {
      let formData = new FormData();
      formData.append("title", this.postForm.value.title);
      formData.append("content", this.postForm.value.content);
      _.forEach(this.tags, tag => formData.append("tags", tag));
      _.forEach(this.selectedFiles, file => formData.append("image", file));
      if(this.isAddMode) {
        this.postFacade.create(formData).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          error => {
            if(error.status == 400) {
              this.postForm?.setErrors({'action': `Post can't create!`})
            }
          }
        );
      } else if(this.id) {
        this.postFacade.update(this.id, formData).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          error => {
            if(error.status == 400) {
              this.postForm?.setErrors({'action': `Post can't update!`})
            }
          }
        );
      }
    }
  }
}