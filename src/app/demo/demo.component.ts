import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  bigArray = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node Js" },
    { id: 3, name: "Java" },
    { id: 4, name: "Javascript" },
    { id: 5, name: "Spring Boot" },
    { id: 6, name: "Ionic" },
    { id: 7, name: "HTML" },
    { id: 8, name: "CSS" },
    { id: 9, name: "Bootstrap" },
    { id: 10, name: "Mongo" }
  ];

  smallArray = [];

  finalArray = [];
  constructor() {
    this.finalArray = _.differenceWith(
      this.bigArray,
      this.smallArray,
      _.isEqual
    );
    console.log(this.finalArray);
  }

  onSelectChange(id) {
    let temp = this.finalArray.find(e => e.id == id);
    this.smallArray.push(temp);
    
  }

  ngOnInit() {}
}
