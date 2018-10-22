import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesmessages',
  templateUrl: './mesmessages.component.html',
  styleUrls: ['./mesmessages.component.scss']
})
export class MesmessagesComponent implements OnInit {
  filterMessage: boolean;
  messageRecu: boolean;
  constructor() { }
  filterMsg() {
    this.filterMessage = !this.filterMessage;
  }
  seeMsg() {
    this.messageRecu = !this.messageRecu;
    this.filterMessage = false;
  }
  ngOnInit() {
  }

}
