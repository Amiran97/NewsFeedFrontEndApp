import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.pug",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  list = [
    {
      number: "1",
      name: "Newest",
      icon: "bi bi-newspaper",
      href: "/post/newest/1"
    },
    {
      number: "2",
      name: "Popular",
      icon: "bi bi-arrow-up-right-circle",
      href: "/post/popular/1"
    }
  ];
  @Output() sideNavToggled: EventEmitter<boolean> = new EventEmitter();
  isSideNavOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  sideNavToggle() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.sideNavToggled.emit(this.isSideNavOpen);
  }
}
