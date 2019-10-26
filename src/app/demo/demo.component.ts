import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  bigArray = [
    { id: 1, name: "rajkumar", city: "pune" },
    { id: 2, name: "vaibhav", city: "mumbai" },
    { id: 3, name: "vaibhavnerle", city: "kolhapur" },
    { id: 4, name: "omkar", city: "junnar" },
    { id: 5, name: "hrishikesh", city: "narhe" },
    { id: 6, name: "shraddha", city: "ghatkopar" },
    { id: 7, name: "ishwari", city: "rajuri" },
    { id: 8, name: "pradnya", city: "moshi" },
    { id: 9, name: "pooja", city: "bhorwadi" },
    { id: 10, name: "amar", city: "delhi" }
  ];

  smallArray = [
    { id: 1, name: "rajkumar", city: "pune" },
    { id: 2, name: "vaibhav", city: "mumbai" },
    { id: 3, name: "vaibhavnerle", city: "kolhapur" }
  ];

  finalArray = [];
  constructor() {
    this.finalArray = _.differenceWith(
      this.bigArray,
      this.smallArray,
      _.isEqual
    );
    console.log(this.finalArray);
  }

  ngOnInit() {}
}
