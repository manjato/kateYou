import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meslistes-produits',
  templateUrl: './meslistes-produits.component.html',
  styleUrls: ['./meslistes-produits.component.scss']
})
export class MeslistesProduitsComponent implements OnInit {
  category = 'ajout';
  marque = 'ajout';
  vueCtg = false;
  vueMark = false;
  imgfemme = 'ajout';
  imghomme = 'ajout';
  imgvtm = 'ajout';
  imgchs = 'ajout';
  imgcolor = 'ajout';
  imgsize = 'ajout';
  vueFemme = false;
  vueSousCategory = false;
  filterProduct = false;
  productSal = false;
  listFilter = [];
  produits = [
    { marque: 'Balanciaga',
      prix: 595,
      symbole: '€',
      description: 'Sneaker speed BLACK',
      img: '/assets/images/others/chaussure.png',
      checked: false,
      status: ''
    },
    { marque: 'Celine',
      prix: 620,
      symbole: '€',
      description: 'Escarpin soft',
      img: '/assets/images/others/haut.png',
      checked: false,
      status: ''
    },
    { marque: 'DOLCE & GABANA',
      prix: 495,
      symbole: '€',
      description: 'Sac Lori',
      img: '/assets/images/others/sac.png',
      checked: false,
      status: ''
    },
    { marque: 'Balanciaga',
      prix: 595,
      symbole: '€',
      description: 'Sneaker speed BLACK',
      img: '/assets/images/others/chaussure.png',
      checked: false,
      status: ''
    },
  ];
  count: number;
  modif = 'default';
  dupli = 'default';
  classArchiv = 'default';
  classdelete = 'default';
  classhandSale = 'defaut';
  classEdit = 'default';
  Archiver: boolean;
  prodArchiver = [];
  seeFilterArchiv: boolean;
  constructor() { }
  btnCtgry() {
    if (this.category === 'ajout') {
      this.category = 'moins';
      this.vueCtg = true;
    } else {
      this.category = 'ajout';
      this.vueCtg = false;
    }
  }
  btnMark() {
    if (this.marque === 'ajout') {
      this.marque = 'moins';
      this.vueMark = true;
    } else {
      this.marque = 'ajout';
      this.vueMark = false;
    }
  }
  btnFemme() {
    if (this.imgfemme === 'ajout') {
      this.imgfemme = 'moins';
      this.vueFemme = true;
    } else {
      this.imgfemme = 'ajout';
      this.vueFemme = false;
    }
  }
  vueVtm () {
  }
  btnChass() {
    if (this.imgchs === 'ajout') {
      this.imgchs = 'moins';
      this.vueSousCategory = true;
    } else {
      this.imgchs = 'ajout';
      this.vueSousCategory = false;
    }
  }
  btnFilter() {
    this.filterProduct = !this.filterProduct;
  }
  selectProduct(produit, ind) {
    this.count = 0;
    this.produits.forEach(res => {
      if (res.checked) {
         this.count = this.count + 1;
      }
    });
    if (this.count >= 2) {
      this.modif = 'desactiver';
      this.dupli = 'desactiver';
      this.classArchiv = 'blueColor';
    } else if (this.count === 1 ) {
      this.classArchiv = 'blueColor';
      this.modif = 'blueColor';
      this.dupli = 'blueColor';
    } else if (this.count === 0 ) {
      this.classArchiv = 'default';
      this.modif = 'default';
      this.dupli = 'default';
    }
    if (produit.checked) {
      this.prodArchiver.push(produit);
      console.log(this.prodArchiver);
    } else {
      this.removeProductArchive(ind);
      console.log(produit, this.prodArchiver, ind);
    }
  }

  removeProduct (ind) {
    this.produits.splice(ind, 1);
  }
  removeProductArchive (produit) {
    const index = this.prodArchiver.indexOf(produit);
    this.prodArchiver.splice(index, 1);
  }
  btnArchiver() {
    for (let i = 0; i < this.prodArchiver.length; i++) {
      this.prodArchiver[i].status = 'Archiver';
      this.prodArchiver[i].checked = false;
    }
    this.classArchiv = 'default';
    this.modif = 'default';
    this.dupli = 'default';
    /* this.Archiver = true; */
   console.log(this.prodArchiver, this.produits);
  }
  selectProductArchiver(prodArch, ind) {
    this.count = 0;
    this.prodArchiver.forEach(res => {
      if (res.checked) {
         this.count = this.count + 1;
      }
    });
    if (this.count === 1 ) {
      this.classdelete = 'blueColor';
      this.classhandSale = 'blueColor';
      this.classEdit = 'blueColor';
    } else if (this.count === 0 ) {
      this.classdelete = 'default';
      this.classhandSale = 'default';
      this.classEdit = 'default';
    }
  }
  filterArchive() {
    this.productSal = false;
    this.seeFilterArchiv = true;
    this.filterProduct = false;
    this.Archiver = true;
  }
  filterProductSale() {
    this.Archiver = false;
    this.productSal = true;
    this.filterProduct = false;
    this.seeFilterArchiv = false;
  }
  btnEdit() {
    console.log('dskdal');
  }
  deleteProductArchiver(produit) {
    console.log(produit);
    this.removeProductArchive(produit);
  }

  ngOnInit() {
  }

}
