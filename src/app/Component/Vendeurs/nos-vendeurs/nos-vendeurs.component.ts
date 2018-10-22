import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nos-vendeurs',
  templateUrl: './nos-vendeurs.component.html',
  styleUrls: ['./nos-vendeurs.component.scss']
})
export class NosVendeursComponent implements OnInit {
  logo = 'ajout';
  logo1 = 'ajout';
  pays: boolean;
  starRating;
  countries = [
    {name: 'Allemagne',
    color : 'grey',
    checked: false},
    {name: 'France',
    color : 'grey',
    checked: false},
    {name: 'Angleterre',
    color : 'grey',
    checked: false},
    {name: 'Belgique',
    color : 'grey',
    checked: false},
    {name: 'Italie',
    color : 'grey',
    checked: false},
    {name: 'Japon',
    color : 'grey',
    checked: false},
    {name: 'Chine',
    color : 'grey',
    checked: false},
  ];
  spoken = [
    {name: 'Allemand',
    color : 'grey',
    checked: false},
    {name: 'Français',
    color : 'grey',
    checked: false},
    {name: 'Anglais',
    color : 'grey',
    checked: false},
    {name: 'Belge',
    color : 'grey',
    checked: false},
    {name: 'Italien',
    color : 'grey',
    checked: false},
    {name: 'Japonais',
    color : 'grey',
    checked: false},
    {name: 'Chinois',
    color : 'grey',
    checked: false},
  ];
  sellers = [
  {
  img: 'assets/images/others/pdp2.svg',
  name: 'Kathleen Pirseen',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'Francais'},
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp4.svg',
  name: 'Britney Joe',
  starRating: '4',
  pays: 'France',
  nbProduit: '216',
  spoken: [
    {langue: 'Francais'},
    {langue: 'anglais'},
    {langue: 'chinois'},
  ]
  },
  {
  img: 'assets/images/others/pdp2.svg',
  name: 'Atklen buedweedless',
  starRating: '4',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'Francais'},
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp3.svg',
  name: 'Pierre Manou',
  starRating: '1',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'Francais'},
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp3.svg',
  name: 'John Mart',
  starRating: '4',
  pays: 'France',
  nbProduit: '126',
  spoken: [
    {langue: 'Francais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp1.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp2.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp3.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp4.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp2.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp1.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  },
  {
  img: 'assets/images/others/pdp1.svg',
  name: 'Martino Bloor',
  starRating: '5',
  pays: 'France',
  nbProduit: '226',
  spoken: [
    {langue: 'anglais'},
    {langue: 'italiens'},
  ]
  }];
  product: any;
  url: any;
  countrie: boolean;
  parle: boolean;
  constructor(
    config: NgbRatingConfig,
    private activatedRoute: ActivatedRoute,
  ) {
    config.max = 5;
    config.readonly = true;
   }
  langueParle() {
    if (this.logo1 === 'moins' ) {
      this.parle = false;
      this.logo1 = 'ajout';
    } else if (this.logo1 === 'ajout') {
      this.parle = true;
      this.logo1 = 'moins';
    }
  }
  voirPays() {
    if (this.logo === 'moins' ) {
      this.countrie = false;
      this.logo = 'ajout';
    } else if (this.logo === 'ajout') {
      this.countrie = true;
      this.logo = 'moins';
    }
  }

  seeCountries(i) {
     if (this.countries[i].color === 'grey') {
      this.countries[i].color = 'black';
      this.countries[i].checked = true;
    } else if (this.countries[i].color === 'black') {
      this.countries[i].color = 'grey';
      this.countries[i].checked = false;
    }
  }
  deleteCountrie(i) {
    this.countries[i].color = 'grey';
    this.countries[i].checked = !this.countries[i].checked;
   }
   deleteSpoke(i) {
    this.spoken[i].color = 'grey';
    this.spoken[i].checked = !this.spoken[i].checked;
   }
   seeProduct(product, ind) {
     console.log(product, ind);
   }
   selectLanguage (i) {
     console.log(i);
   }
   spokenLang(i) {
    if (this.spoken[i].color === 'grey') {
      this.spoken[i].color = 'black';
      this.spoken[i].checked = true;
    } else if (this.spoken[i].color === 'black') {
      this.spoken[i].color = 'grey';
      this.spoken[i].checked = false;
    }
   }
  ngOnInit() {
    this.url = this.activatedRoute.snapshot.params;
  }

}
