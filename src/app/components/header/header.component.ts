import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.pug",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  search = new FormControl("");
  ngOnInit() {}

  searchPosts() {
    console.log(this.search.value);
  }
}
