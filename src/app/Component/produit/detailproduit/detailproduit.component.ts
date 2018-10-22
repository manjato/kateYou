import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.scss'],
  providers: [NgbRatingConfig]
  })
export class DetailproduitComponent implements OnInit {
  description: boolean;
  expedition: boolean;
  comments: boolean;
  seeComent: boolean;
  seeSize: boolean;
  arrow = 'arrow_down';
  arrow1 = 'arrow_down';
  arrow2 = 'arrow_down';
  arrowSize = 'arrow_down';
  rating: any;
  tests = [];
  product = [];
  url: any;
  comentaire: any;
  selectedBodystyle: string;
  headMessage: string;
  products = [
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
  tailles = [
    {
      originale: '38',
      paysOriginale: 'IT',
      conversion: '34',
      paysConversion: 'FRA',
      text: '',
    },
    {
      originale: '40',
      paysOriginale: 'IT',
      conversion: '36',
      paysConversion: 'FRA',
      text: 'Dernier en stock',
    },
    {
      originale: '42',
      paysOriginale: 'IT',
      conversion: '38',
      paysConversion: 'FRA',
      text: 'Dernier en stock',
    },
    {
      originale: '44',
      paysOriginale: 'IT',
      conversion: '40',
      paysConversion: 'FRA',
      text: '',
    },
  ];
  coments = [
    { avatar: 'assets/images/others/pdp1.svg',
      name: 'Kan Goura',
      pays: 'France',
      time: '2',
      favoris: 12,
      // tslint:disable-next-line:max-line-length
      coment : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis',
      responses:
      [{
        // tslint:disable-next-line:max-line-length
          response: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.',
          time : '1',
          avatarImg : 'assets/images/others/pdp2.svg',
          name: 'Jimra Nica',
          pays: 'Japon',
          favoris: 0,
      },
      { // tslint:disable-next-line:max-line-length
          response: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.',
          time : '1',
          avatarImg : 'assets/images/others/pdp1.svg',
          name: 'Kan Goura',
          pays: 'France',
          favoris: 5,
      },
      { // tslint:disable-next-line:max-line-length
          response: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.',
          time : '1',
          avatarImg : 'assets/images/others/pdp1.svg',
          name: 'Test',
          pays: 'Italie',
          favoris: 2,
      },
      { // tslint:disable-next-line:max-line-length
          response: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat.',
          time : '1',
          avatarImg : 'assets/images/others/pdp3.svg',
          name: 'My name',
          pays: 'Italie',
          favoris: 4,
      }],
    },
    {
    avatar: 'assets/images/others/pdp2.svg',
    name: 'Paul Thoma',
    pays: 'Urugay',
    time: '2',
    favoris: 10,
    // tslint:disable-next-line:max-line-length
    coment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis',
  },
  {
    avatar: 'assets/images/others/pdp3.svg',
    name: 'Kan Goura',
    pays: 'France',
    time: '2',
    favoris: 5,
    // tslint:disable-next-line:max-line-length
    coment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis',
  },
    ];
  stars = [{empty: [true, true, true, true, true]}];
  paysConversion: any;
  conversion: any;
  paysOriginale: any;
  originale: any;
  seeReplySize: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    config: NgbRatingConfig,
  ) {
    config.max = 5;
    config.readonly = true;
  }

  setClickedRow(taille) {
      this.originale = taille.originale  ;
      this.paysOriginale = taille.paysOriginale;
      this.conversion = taille.conversion;
      this.paysConversion = taille.paysConversion;
      this.seeSize = false;
      this.arrowSize = 'arrow_down';
      this.seeReplySize = true;
      console.log(taille);
 }
  descri() {
    if (this.arrow === 'arrow_down') {
      this.arrow = 'arrow_up';
    } else {
      this.arrow = 'arrow_down';
    }
    this.description = !this.description;
  }
  exped() {
    if (this.arrow1 === 'arrow_down') {
      this.arrow1 = 'arrow_up';
    } else {
      this.arrow1 = 'arrow_down';
    }
    this.expedition = !this.expedition;
  }
  setStarTable(star, data) {
    this.rating = data + 1;
    const list = this.stars.find(function (obj: any) {
       return obj.Id === star.Id;
      });
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        list.empty[i] = false;
      } else {
        list.empty[i] = true;
      }
    }

  }
  selectSize() {
    if (this.arrowSize === 'arrow_down') {
      this.arrowSize = 'arrow_up';
    } else {
      this.arrowSize = 'arrow_down';
    }
    this.seeSize = !this.seeSize;
  }
  coment() {
    if (this.arrow2 === 'arrow_down') {
      this.arrow2 = 'arrow_up';
    } else {
      this.arrow2 = 'arrow_down';
    }
    this.seeComent = !this.seeComent;
  }
  favReponse (response) {
    response.favoris ++;
    console.log(response.favoris);
  }
  favoris(ind) {
    console.log(this.coments[ind]);
    this.coments[ind].favoris ++;
  }
  detailProduct(product) {
    console.log(product);
  }
  addPanier() {}
  ngOnInit() {
    this.url = this.activatedRoute.snapshot.params;
  }

}
