import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  date1: Date;
  defaultDate = new Date();

  constructor() {
    this.defaultDate.setDate(19);
    this.defaultDate.setHours(10);
    this.defaultDate.setMinutes(15);
  }
}
