import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mesproduits',
  templateUrl: './mesproduits.component.html',
  styleUrls: ['./mesproduits.component.scss']
})
export class MesproduitsComponent implements OnInit {
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
  url: any;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

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
   seeProduct(product, ind) {
     console.log(product, ind);
   }
  ngOnInit() {
    this.url = this.activatedRoute.snapshot.params;
  }

}
