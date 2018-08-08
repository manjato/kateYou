import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class ProfilComponent implements OnInit {
  sign = 'password';
  fa = 'fa-eye';
  homme = 'activ';
  femme = 'noActive';
  constructor() { }
  showPass () {
    if (this.sign === 'password' && this.fa === 'fa-eye') {
      this.sign = 'text';
      this.fa = 'fa-eye-slash';
    } else {
      this.sign = 'password';
      this.fa = 'fa-eye';
    }
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
  ngOnInit() {
  }

}
