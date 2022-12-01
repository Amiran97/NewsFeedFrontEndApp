import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.pug",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isSideNavOpen: boolean = false;
}
