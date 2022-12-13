import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/interfaces/post";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.pug",
  styleUrls: ["./post-item.component.scss"],
})
export class PostItemComponent implements OnInit {
  @Input() post?: Post;
  constructor() {}

  ngOnInit() {}
  ratingUp() {
    console.log("Rating up");
  }
  ratingDown() {
    console.log("Rating down");
  }
  likePost() {
    console.log("Like Post");
  }
  commentPost() {
    console.log("Comment Post");
  }
}