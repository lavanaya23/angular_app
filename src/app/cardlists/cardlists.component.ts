import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Data } from '../models/data';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-cardlists',
  templateUrl: './cardlists.component.html',
  styleUrls: ['./cardlists.component.css']
})
export class CardlistsComponent implements OnInit {
  details: Data[];
  loader: boolean = true;
  @Output('classBool') classBool = new EventEmitter();
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getData().subscribe((succe) => {
      console.log(succe);
      this.details = succe.data.children;

      console.log(this.details);
      this.loader = false;
      this.classBool.emit(true);
    })
    // this.loader=false;
  }


}
