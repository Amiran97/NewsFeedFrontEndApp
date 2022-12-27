import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { Subscription } from "rxjs";
import { PagginationData } from "../../models/paggination-data";
import { PagginationService } from "../../services/paggination.service";

@Component({
  selector: "app-paggination",
  templateUrl: "./paggination.component.pug",
  styleUrls: ["./paggination.component.scss"],
})
export class PagginationComponent implements OnInit, OnDestroy {
  constructor(private router: Router,
    private pagginationService: PagginationService) {}

  data?: PagginationData;
  dataSub?: Subscription;

  ngOnInit() {
    this.dataSub = this.pagginationService.pagginationData.subscribe(data => {
       this.data = data 
       if(this.data.page > this.data.totalPages) {
        let index = _.lastIndexOf(this.router.routerState.snapshot.url, '/');
        this.router.navigate([this.router.routerState.snapshot.url.substring(0, index+1) + (this.data.page-1)]); 
       }
      });
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }

  onClick(page: number) {
    let index = _.lastIndexOf(this.router.routerState.snapshot.url, '/');
    this.router.navigate([this.router.routerState.snapshot.url.substring(0, index+1) + page]);
  }

  onPrevClick() {
    if(this.data) {
        let index = _.lastIndexOf(this.router.routerState.snapshot.url, '/');
        this.router.navigate([this.router.routerState.snapshot.url.substring(0, index+1) + (this.data?.page-1)]); 
    }
  }

  onNextClick() {
    if(this.data) {
        let index = _.lastIndexOf(this.router.routerState.snapshot.url, '/');
        this.router.navigate([this.router.routerState.snapshot.url.substring(0, index+1) + (this.data?.page+1)]); 
    }
  }
}
