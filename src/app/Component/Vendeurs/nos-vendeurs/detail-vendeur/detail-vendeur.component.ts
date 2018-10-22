import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-vendeur',
  templateUrl: './detail-vendeur.component.html',
  styleUrls: ['./detail-vendeur.component.scss'],
  providers: [NgbRatingConfig]
})
export class DetailVendeurComponent implements OnInit {
  currentRate = 4;
  classeApropos = 'activ';
  apropos = true;
  classeProduit = 'noActiv';
  vueProduits = false;
  classeActivite = 'noActiv';
  vueActivite = false;
  logo = 'moins';
  colors = [
    {name: 'Beige',
    color : 'grey',
    checked: false},
    {name: 'Blanc',
    color : 'grey',
    checked: false},
    {name: 'Bleu',
    color : 'grey',
    checked: false},
    {name: 'Bleu d\'azur',
    color : 'grey',
    checked: false},
    {name: 'Gris',
    color : 'grey',
    checked: false},
    {name: 'Jaune',
    color : 'grey',
    checked: false},
    {name: 'Marron',
    color : 'grey',
    checked: false},
    {name: 'Noir',
    color : 'grey',
    checked: false},
    {name: 'Rose',
    color : 'grey',
    checked: false},
    {name: 'Rouge',
    color : 'grey',
    checked: false},
    {name: 'Vert',
    color : 'grey',
    checked: false},
    {name: 'Violet',
    color : 'grey',
    checked: false}
  ];
  products = [
  {
  img: 'assets/images/others/Base.svg',
  name: 'Giuseppe zanotti',
  description: 'Cruel sandals',
  prix: '1900 €',
  avatarVendeur: 'assets/images/others/pdp2.svg',
  nomVendeur: 'Kathleen Pirseen',
  pays: 'France',
  },
  {
  img: 'assets/images/others/Base1.svg',
  name: 'Gucci',
  description: 'Crystal leather pumps',
  prix: '1800 €',
  avatarVendeur: 'assets/images/others/pdp2.svg',
  nomVendeur: 'Britney Joe',
  pays: 'France',
},
{
  img: 'assets/images/others/Base2.svg',
  name: 'Gucci',
  description: 'Crystal leather pumps',
  prix: '1750 €',
  avatarVendeur: 'assets/images/others/pdp4.svg',
  nomVendeur: 'Pierre Manou',
  pays: 'France',
},
{
  img: 'assets/images/others/Base3.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp3.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
},
{
  img: 'assets/images/others/Base4.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp4.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
},
{
  img: 'assets/images/others/Base5.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp5.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
},
{
  img: 'assets/images/others/Base.svg',
  name: 'Giuseppe zanotti',
  description: 'Cruel sandals',
  prix: '1900 €',
  avatarVendeur: 'assets/images/others/pdp1.svg',
  nomVendeur: 'Kathleen Pirseen',
  pays: 'France',
  },
  {
  img: 'assets/images/others/Base1.svg',
  name: 'Gucci',
  description: 'Crystal leather pumps',
  prix: '1800 €',
  avatarVendeur: 'assets/images/others/pdp2.svg',
  nomVendeur: 'Britney Joe',
  pays: 'France',
},
{
  img: 'assets/images/others/Base2.svg',
  name: 'Gucci',
  description: 'Crystal leather pumps',
  prix: '1750 €',
  avatarVendeur: 'assets/images/others/pdp4.svg',
  nomVendeur: 'Pierre Manou',
  pays: 'France',
},
{
  img: 'assets/images/others/Base3.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp3.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
},
{
  img: 'assets/images/others/Base4.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp4.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
},
{
  img: 'assets/images/others/Base5.svg',
  name: 'Jimmy choo',
  description: 'Crystal pumps',
  prix: '1500 €',
  avatarVendeur: 'assets/images/others/pdp5.svg',
  nomVendeur: 'Atklen buedweedless',
  pays: 'France',
}];
  product: any;
  activities = [
    {
      imgnotif : 'assets/images/others/panier.png',
      name: 'Atklen buedwoski',
      notifNumber: '1',
      nameNotif: 'produit',
      imgProduct: 'assets/images/others/kiraro.png',
      date: '14 mars 2018'
    },
    {
      imgnotif : 'assets/images/others/commenter.png',
      name: 'Atklen buedwoski',
      notifNumber: '1',
      nameNotif: 'feedback',
      imgProduct: 'assets/images/others/avatarhomme.png',
      date: '11 janvier 2018'
    },
    {
      imgnotif : 'assets/images/others/commenter.png',
      name: 'Atklen buedwoski',
      notifNumber: '1',
      nameNotif: 'produit',
      imgProduct: 'assets/images/others/avatarhomme.png',
      date: '11 janvier 2018'
    },
    {
      imgnotif : 'assets/images/others/ajout.png',
      name: 'Atklen buedwoski',
      notifNumber: '1',
      nameNotif: 'feedback',
      imgProduct: 'assets/images/others/kiraro.png',
      date: '11 janvier 2018'
    }
  ];

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }
   btnApropos() {
     this.apropos = true;
     this.classeApropos = 'activ';
     this.vueProduits = false;
     this.vueActivite = false;
     this.classeProduit =  'noActiv';
     this.classeActivite = 'noActiv';
   }
   btnProduit() {
    this.classeProduit =  'activ';
    this.vueProduits = true;
    this.apropos = false;
    this.vueActivite = false;
    this.classeApropos = 'noActiv';
    this.classeActivite = 'noActiv';
     }
   btnActivite() {
    this.classeActivite = 'activ';
    this.vueActivite = true;
    this.vueProduits = false;
    this.apropos = false;
    this.classeApropos =  'noActiv';
    this.classeProduit = 'noActiv';
   }
   changeColor(i) {
    if (this.colors[i].color === 'grey') {
     this.colors[i].color = 'black';
     this.colors[i].checked = true;
   } else if (this.colors[i].color === 'black') {
     this.colors[i].color = 'grey';
     this.colors[i].checked = false;
   }
 }
 deleteColor(i) {
   this.colors[i].color = 'grey';
   this.colors[i].checked = !this.colors[i].checked;
  }
  ngOnInit() {
  }

}
