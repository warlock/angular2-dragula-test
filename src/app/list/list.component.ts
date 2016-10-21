import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DragulaService } from 'ng2-dragula/ng2-dragula'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DragulaService]
})
export class ListComponent implements OnInit {

  issuesall : Array<Object> = [
    { id : 1, ord : 1, title : "titulo 1", priority : "1", status : 1, date : Date.now(), user : 1, watch : [1,2] },
    { id : 2, ord : 2, title : "titulo 2", priority : "2", status : 0, date : Date.now(), user : 1, watch : [2] },
    { id : 3, ord : 3, title : "titulo 3", priority : "3", status : 1, date : Date.now(), user : 2, watch : [1] },
    { id : 4, ord : 4, title : "titulo 4", priority : "4", status : 0, date : Date.now(), user : 2, watch : [1,2] },
    { id : 5, ord : 5, title : "titulo 5", priority : "5", status : 0, date : Date.now(), user : 2, watch : [2] }
  ];

  issues : Array<Object>;

  userid : number = 1;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
          console.log('res: ' + value)
    });
  }

  ngOnInit() {
    this.issues = this.issuesall
  }

  filter(data : any) {
    console.log("SOLICITUD ---> " + JSON.stringify(data))
  }
}
