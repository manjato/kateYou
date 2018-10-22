import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.scss']
})
export class MescommandesComponent implements OnInit {
  achat = 'noActive';
  vente = 'activ';
  mesVentes = true;
  myCommandSale: boolean;
  myPurchases = [{
    numero: '#JKFLA501501520',
    name: 'Mc Cartney',
    titre: 'Manteau',
    img: 'assets/images/others/Calque.png',
    price: 100,
    status: 'livre',
    code_money: '€',
  },

];
  myOrders = [{
    numero: '#JKFLA501501520',
    name: 'Mc Cartney',
    titre: 'Manteau',
    img: 'assets/images/others/Calque.png',
    price: 100,
    status: 'livre',
    code_money: '€',
  },
  {
    numero: '#JKFLA501501520',
    name: 'Mc Cartney',
    titre: 'Manteau',
    img: 'assets/images/others/Calque.png',
    price: 100,
    status: 'livre',
    code_money: '€',
  },
  {
    numero: '#JKFLA501501520',
    name: 'Mc Cartney',
    titre: 'Manteau',
    img: 'assets/images/others/Calque.png',
    price: 100,
    status: 'livre',
    code_money: '€',
  },
];
  myCommandBuy: boolean;
  constructor() { }
  BtnAchat() {
    if (this.vente === 'activ' && this.achat === 'noActive') {
      this.vente = 'noActive';
      this.achat = 'activ';
      this.mesVentes = false;
    } else {
      this.vente = 'activ';
      this.achat = 'noActive';
      this.mesVentes = true;
    }
  }
  filterSale() {
    this.myCommandSale = !this.myCommandSale;
  }
  filterBuy() {
    this.myCommandBuy = !this.myCommandBuy;
  }
  gotoPurchase() {
    this.vente = 'noActive';
    this.achat = 'activ';
    this.mesVentes = false;
  }
  gotoSales() {
    this.vente = 'activ';
    this.achat = 'noActive';
    this.mesVentes = true;
  }
  ngOnInit() {
  }

}
