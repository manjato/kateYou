import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits = [
    {
      name: 'Giuseppe zanotti',
      info: 'Cruel sandals',
      imgProduct: 'assets/images/others/Base1.svg',
      colorProduct: 'assets/images/colors/bleu.png',
      color: 'Bleu',
      priceProduct: 1100,
      imgSeller: 'assets/images/others/pdp1.svg',
      nameSeller: 'Kathleen Pirseen',
      pays: 'Pays',
      originale: '44',
      paysOriginale: 'IT',
      conversion: '40',
      paysConversion: 'FRA',
    },
    {
      name: 'Giuseppe zanotti',
      info: 'Cruel sandals',
      imgProduct: 'assets/images/others/Base1.svg',
      colorProduct: 'assets/images/colors/vert.png',
      color: 'Vert',
      priceProduct: 1100,
      imgSeller: 'assets/images/others/pdp1.svg',
      nameSeller: 'Kathleen Pirseen',
      pays: 'Pays',
      originale: '44',
      paysOriginale: 'IT',
      conversion: '40',
      paysConversion: 'FRA',
    },
    {
      name: 'Giuseppe zanotti',
      info: 'Cruel sandals',
      imgProduct: 'assets/images/others/Base3.svg',
      colorProduct: 'assets/images/colors/vert.png',
      color: 'Vert',
      priceProduct: 100,
      imgSeller: 'assets/images/others/pdp3.svg',
      nameSeller: 'Kathleen Pirseen',
      pays: 'Pays',
      originale: '44',
      paysOriginale: 'IT',
      conversion: '40',
      paysConversion: 'FRA',
    },
    {
      name: 'Giuseppe zanotti',
      info: 'Cruel sandals',
      imgProduct: 'assets/images/others/Base2.svg',
      colorProduct: 'assets/images/colors/rouge.png',
      color: 'Rouge',
      priceProduct: 1100,
      imgSeller: 'assets/images/others/pdp2.svg',
      nameSeller: 'Kathleen Pirseen',
      pays: 'Pays',
      originale: '44',
      paysOriginale: 'IT',
      conversion: '40',
      paysConversion: 'FRA',
    },
  ];
  total: number;
  runningValue: number;
  constructor() { }
  deletePanier(produit, i) {
    console.log(produit, 'dsada',   i);
   this.produits.splice(produit, 1);
  }
  // tslint:disable-next-line:use-life-cycle-interface
   ngAfterContentChecked()  {
    this.total = this.produits.reduce((runningValue, produit) => {
        runningValue = runningValue + produit.priceProduct;
        return runningValue;
    }, 0);
}
  ngOnInit() {
  }

}
