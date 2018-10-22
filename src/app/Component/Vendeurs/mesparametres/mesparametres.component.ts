import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesparametres',
  templateUrl: './mesparametres.component.html',
  styleUrls: ['./mesparametres.component.scss']
})
export class MesparametresComponent implements OnInit {
  ventesoui = 'activ';
  ventesnon = 'noActive';
  msgoui = 'activ';
  msgnon = 'noActive';
  comsoui = 'activ';
  comsnon = 'noActive';
  fboui = 'activ';
  fbnon = 'noActive';
  suiviecomoui = 'activ';
  suiviecomnon = 'noActive';
  lovesoui = 'activ';
  lovesnon = 'noActive';
  constructor() { }
  ventes() {
    if (this.ventesoui === 'activ' && this.ventesnon === 'noActive') {
      this.ventesoui = 'noActive';
      this.ventesnon = 'activ';
    } else {
      this.ventesoui = 'activ';
      this.ventesnon = 'noActive';
    }
  }
  msg() {
    if (this.msgoui === 'activ' && this.msgnon === 'noActive') {
      this.msgoui = 'noActive';
      this.msgnon = 'activ';
    } else {
      this.msgoui = 'activ';
      this.msgnon = 'noActive';
    }
  }
  coms() {
    if (this.comsoui === 'activ' && this.comsnon === 'noActive') {
      this.comsoui = 'noActive';
      this.comsnon = 'activ';
    } else {
      this.comsoui = 'activ';
      this.comsnon = 'noActive';
    }
  }
  fb() {
    if (this.fboui === 'activ' && this.fbnon === 'noActive') {
      this.fboui = 'noActive';
      this.fbnon = 'activ';
    } else {
      this.fboui = 'activ';
      this.fbnon = 'noActive';
    }
  }
  suiviecom() {
    if (this.suiviecomoui === 'activ' && this.suiviecomnon === 'noActive') {
      this.suiviecomoui = 'noActive';
      this.suiviecomnon = 'activ';
    } else {
      this.suiviecomoui = 'activ';
      this.suiviecomnon = 'noActive';
    }
  }
  loves() {
    if (this.lovesoui === 'activ' && this.lovesnon === 'noActive') {
      this.lovesoui = 'noActive';
      this.lovesnon = 'activ';
    } else {
      this.lovesoui = 'activ';
      this.lovesnon = 'noActive';
    }
  }
  ngOnInit() {
  }

}
