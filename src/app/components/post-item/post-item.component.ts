import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/interfaces/post";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit {
  @Input() post?: Post;
  constructor() {}

  ngOnInit() {}
}
