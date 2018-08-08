import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeurprofil',
  templateUrl: './vendeurprofil.component.html',
  styleUrls: ['./vendeurprofil.component.scss']
})
export class VendeurprofilComponent implements OnInit {
  langue = false;
  constructor() { }
  langues = [
    {Value: 'Francais'},
    {Value: 'Anglais'},
    {Value: 'Espagnol'},
    {Value: 'Italien'},
  ];
  addLangue () {
    this.langue = true;
  }
  ngOnInit() {
  }

}
