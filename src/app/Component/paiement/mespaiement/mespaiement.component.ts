import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mespaiement',
  templateUrl: './mespaiement.component.html',
  styleUrls: ['./mespaiement.component.scss']
})
export class MespaiementComponent implements OnInit {
 homme = 'activ';
 femme = 'noActive';
  constructor() { }

  ngOnInit() {
  }
  civilite() {
    if (this.homme === 'activ' && this.femme === 'noActive') {
      this.homme = 'noActive';
      this.femme = 'activ';
    } else {
      this.homme = 'activ';
      this.femme = 'noActive';
    }
  }
}
