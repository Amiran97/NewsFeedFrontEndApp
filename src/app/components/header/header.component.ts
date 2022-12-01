import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.pug",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  search = new FormControl("");
  ngOnInit() {}

  searchPosts() {
    console.log(this.search.value);
  }
}
