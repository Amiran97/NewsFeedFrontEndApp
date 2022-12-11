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
    },
    {
      number: "2",
      name: "Popular",
      icon: "bi bi-arrow-up-right-circle",
    },
    {
      number: "3",
      name: "Favorite",
      icon: "bi bi-heart-fill",
    },
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
