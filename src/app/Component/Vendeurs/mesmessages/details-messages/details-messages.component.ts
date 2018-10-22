import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-messages',
  templateUrl: './details-messages.component.html',
  styleUrls: ['./details-messages.component.scss']
})
export class DetailsMessagesComponent implements OnInit {

  constructor() { }
  back() {
    window.history.back();
  }
  ngOnInit() {
  }

}
