import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Observable } from "rxjs";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.pug",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  constructor(private postFacade: PostFacadeService,
    public accountFacade: AccountFacadeService) {}

  postsList$: Observable<Post[]> = this.postFacade.posts$;

  ngOnInit() {}

  navToNextPost(id: number) {
    this.postsList$.subscribe(data => {
      let index = _.findLastIndex(data, item => item.id == id);
      if(index < data.length - 1) {
        let idNext = data[index + 1].id;
        if(idNext) {
          document.querySelector('#id-' + idNext)?.scrollIntoView();
        }
      }
    })
  }
}