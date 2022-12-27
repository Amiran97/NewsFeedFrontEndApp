import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import { Observable, Subscription } from "rxjs";
import { AccountFacadeService } from "src/app/modules/account/services/account-facade.service";
import { Post } from "src/app/modules/post/models/post";
import { PostFacadeService } from "../../services/post-facade.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.pug",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit, OnDestroy {
  constructor(private postFacade: PostFacadeService,
    public accountFacade: AccountFacadeService,
    private route: ActivatedRoute) {}

  postsList$: Observable<Post[]> = this.postFacade.posts$;
  routeSub?: Subscription;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      if(this.route.routeConfig && this.route.routeConfig.path) {
        let index = _.indexOf(this.route.routeConfig.path, '/');
        let option = this.route.routeConfig.path.substring(0, index);
        let page = +params['page'];
        this.postFacade.get(page, option);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

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