import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  all() {
    this.filter.emit("ALL");
  }

  open() {
    this.filter.emit("OPEN");
  }

  my() {
    this.filter.emit("MY");
  }

}
