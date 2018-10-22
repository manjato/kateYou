import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {
  border = 'noactive';
  colors: any;
  modalColor: BsModalRef;
  colorsChoose = [];
  marika = false;
  anotherColor: boolean;
  spinner: boolean;
  config = {
    ignoreBackdropClick: true
  };
  matieres = [{
    type: 'Cuire',
    categories:
    [{
      nom: 'Tissu',
      choix: false
    },
    {
      nom: 'Plastique',
      choix: false
    },
    {
      nom: 'Tricot',
      choix: false
    },
    {
      nom: 'Jeans',
      choix: false
    }
  ]},
  {
  type: 'Lin',
  categories:
  [{
    nom: 'Daim',
    choix: false
  },
  {
    nom: 'Cachemire',
    choix: false
  },
  {
    nom: 'Mousseline',
    choix: false
  },
  {
    nom: 'Voile',
    choix: false
  }
]},
{
  type: 'Fourrure',
  categories:
  [{
    nom: 'Coton',
    choix: false
  },
  {
    nom: 'Polyester',
    choix: false
  },
  {
    nom: 'Soie',
    choix: false
  },
  {
    nom: 'Nylon',
    choix: false
  }
]},
];
  femmes = [{
    type: 'Vetements',
    categories:
    [{
      nom: 'T-shirt, Coupe et cousu',
      choose: false
    },
    {
      nom: 'Chemisier-Chemise',
      choose: false
    },
    {
      nom: 'Sweat trainer',
      choose: false
    },
    {
      nom: 'Hoodie Parker',
      choose: false
    },
    {
      nom: 'Cardigan',
      choose: false
    },
    {
      nom: 'Ensemble',
      choose: false
    },
    {
      nom: 'Polo',
      choose: false
    },
    {
      nom: 'Tunique',
      choose: false
    },
    {
      nom: 'Autres',
      choose: false
    }
  ]},
  {
    type: 'chaussure',
    categories:
    [{
      nom: 'Ballerine',
      choose: false
    },
    {
      nom: 'Bottes & Bottines',
      choose: false
    },
    {
      nom: 'Escarpins',
      choose: false
    },
    {
      nom: 'Richelieus',
      choose: false
    },
    {
      nom: 'Espadrilles',
      choose: false
    },
    {
      nom: 'Autres',
      choose: false
    },
  ]},
  {
    type: 'sacs',
    categories:
    [{
      nom: 'Fourre-tout',
      choose: false
    },
    {
      nom: 'Sac à main',
      choose: false
    },
    {
      nom: 'Sac à bandoulière- Pochette',
      choose: false
    },
    {
      nom: 'Sac à dos',
      choose: false
    },
    {
      nom: 'Pochette',
      choose: false
    },
    {
      nom: 'Sac à panier',
      choose: false
    },
    {
      nom: 'Boston sac',
      choose: false
    },
    {
      nom: 'Sac de fête',
      choose: false
    },
    {
      nom: 'Sac écologique',
      choose: false
    },
    {
      nom: 'Autres',
      choose: false
    }
  ]},
  {
    type: 'accesoires',
    categories:
    [{
      nom: 'Collier- Pendentif',
      choose: false
    },
    {
      nom: 'Boucles d\'oreilles',
      choose: false
    },
    {
      nom: 'Bagues',
      choose: false
    },
    {
      nom: 'Bracelet',
      choose: false
    },
    {
      nom: 'Chevillère',
      choose: false
    },
    {
      nom: 'Accesoires des cheveux',
      choose: false
    },
    {
      nom: 'Accesoires de fête',
      choose: false
    },
    {
      nom: 'Pierre naturelle',
      choose: false
    },
    {
      nom: 'Autres',
      choose: false
    }]
  }
  ];
  modalMatiere: BsModalRef;
  modalCategory: BsModalRef;
  modalSearch: BsModalRef;
  modalA: BsModalRef;
  modalB: BsModalRef;
  modalC: BsModalRef;
  modalD: BsModalRef;
  modalE: BsModalRef;
  modalF: BsModalRef;
  modalG: BsModalRef;
  modalH: BsModalRef;
  modalI: BsModalRef;
  modalJ: BsModalRef;
  modalK: BsModalRef;
  modalL: BsModalRef;
  modalM: BsModalRef;
  modalN: BsModalRef;
  modalO: BsModalRef;
  modalP: BsModalRef;
  modalQ: BsModalRef;
  modalR: BsModalRef;
  modalS: BsModalRef;
  modalT: BsModalRef;
  modalU: BsModalRef;
  modalV: BsModalRef;
  modalW: BsModalRef;
  modalX: BsModalRef;
  modalY: BsModalRef;
  modalZ: BsModalRef;
  modal123: BsModalRef;
  markA: any;
  markB: any;
  markC: any;
  markD: any;
  markE: any;
  markF: any;
  markG: any;
  markH: any;
  markI: any;
  markJ: any;
  markK: any;
  markL: any;
  markM: any;
  markN: any;
  markO: any;
  markP: any;
  markQ: any;
  markR: any;
  markS: any;
  markT: any;
  markU: any;
  markV: any;
  markW: any;
  markX: any;
  markY: any;
  markZ: any;
  p = 1;
  markSelected = [];
  seeMark = false;
  saison = [
  {name: 'ete'},
  {name: 'automne'},
  {name: 'hiver'},
  {name: 'printemps'}
];
  constructor(
    private productService: ProductsService,
    private router: Router,
    private modalService: BsModalService,
  ) { }
  cat(i, f) {
    console.log(i, f);
  }
  type(i, femme) {
    console.log(femme, i, femme.type);
  }
 getAllColor() {
    this.productService.colorProduct().subscribe(color => {
      this.colors = color.data;
    });
  }
  gedBorder() {
      this.border = 'active';
  }
  openModalColor(template: TemplateRef<any>) {
    this.modalColor = this.modalService.show(template, Object.assign({}, { class: 'modalColor modal-lg' }) );
  }
  openModalMatiere(template: TemplateRef<any>) {
    this.modalMatiere = this.modalService.show(template, Object.assign({}, { class: 'modalMatiere modal-lg' }) );

  }
  openModalCategory(template: TemplateRef<any>) {
    this.modalCategory = this.modalService.show(template, Object.assign({}, { class: 'modalMatiere modal-lg' }) );
  }
  openModalSearch(template: TemplateRef<any>) {
    this.markSelected = [];
    this.modalSearch = this.modalService.show(template, Object.assign({}, { class: 'modalMatiere modal-lg' }) );
    this.seeMark = false;
  }
  openModalA(template: TemplateRef<any>) {
    this.spinner = true;
    this.modalA = this.modalService.show(template, { class: 'modal-lg' });
    this.productService.getMarkA().subscribe(data => {
      this.markA = data.data;
      this.spinner = false;
      console.log(this.markA);
     });
  }

  openModalB(template: TemplateRef<any>) {
    this.modalB = this.modalService.show(template, { class: 'modal-lg' });
    this.productService.getMarkB().subscribe(data => {
      this.markB = data.data;
      console.log(this.markB);
     });
 }
 openModalC(template: TemplateRef<any>) {
  this.modalC = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkC().subscribe(data => {
    this.markC = data.data;
   });
}
 openModalD(template: TemplateRef<any>) {
  this.modalD = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkD().subscribe(data => {
    this.markD = data.data;
   });
}
 openModalE(template: TemplateRef<any>) {
  this.modalE = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkE().subscribe(data => {
    this.markE = data.data;
   });
}
 openModalF(template: TemplateRef<any>) {
  this.modalF = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkF().subscribe(data => {
    this.markF = data.data;
   });
}
 openModalG(template: TemplateRef<any>) {
  this.modalG = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkG().subscribe(data => {
    this.markG = data.data;
   });
}
 openModalH(template: TemplateRef<any>) {
  this.modalH = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkH().subscribe(data => {
    this.markH = data.data;
   });
}
 openModalI(template: TemplateRef<any>) {
  this.modalI = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkI().subscribe(data => {
    this.markI = data.data;
   });
}
 openModalJ(template: TemplateRef<any>) {
  this.modalJ = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkJ().subscribe(data => {
    this.markJ = data.data;
   });
}
 openModalK(template: TemplateRef<any>) {
  this.modalK = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkK().subscribe(data => {
    this.markK = data.data;
   });
}
 openModalL(template: TemplateRef<any>) {
  this.modalL = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkL().subscribe(data => {
    this.markL = data.data;
   });
}
 openModalM(template: TemplateRef<any>) {
  this.modalM = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkM().subscribe(data => {
    this.markM = data.data;
   });
}
 openModalN(template: TemplateRef<any>) {
  this.modalN = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkN().subscribe(data => {
    this.markN = data.data;
   });
}
 openModalO(template: TemplateRef<any>) {
  this.modalO = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkO().subscribe(data => {
    this.markO = data.data;
   });
}
 openModalP(template: TemplateRef<any>) {
  this.modalP = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkP().subscribe(data => {
    this.markP = data.data;
   });
}
 openModalQ(template: TemplateRef<any>) {
  this.modalQ = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkQ().subscribe(data => {
    this.markQ = data.data;
   });
}
 openModalR(template: TemplateRef<any>) {
  this.modalR = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkR().subscribe(data => {
    this.markR = data.data;
   });
}
 openModalS(template: TemplateRef<any>) {
  this.modalS = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkS().subscribe(data => {
    this.markS = data.data;
   });
}
 openModalT(template: TemplateRef<any>) {
  this.modalT = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkT().subscribe(data => {
    this.markT = data.data;
   });
}
 openModalU(template: TemplateRef<any>) {
  this.modalU = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkU().subscribe(data => {
    this.markU = data.data;
   });
}
 openModalV(template: TemplateRef<any>) {
  this.modalV = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkV().subscribe(data => {
    this.markV = data.data;
   });
}
 openModalW(template: TemplateRef<any>) {
  this.modalW = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkW().subscribe(data => {
    this.markW = data.data;
   });
}
openModalX(template: TemplateRef<any>) {
  this.modalX = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkX().subscribe(data => {
    this.markX = data.data;
   });
}
 openModalY(template: TemplateRef<any>) {
  this.modalY = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkY().subscribe(data => {
    this.markY = data.data;
   });
}
 openModalZ(template: TemplateRef<any>) {
  this.modalZ = this.modalService.show(template, { class: 'modal-lg' });
  this.productService.getMarkZ().subscribe(data => {
    this.markZ = data.data;
   });
}
openModal123(template: TemplateRef<any>) {
  this.modal123 = this.modalService.show(template, { class: 'modal-lg' });
}
selectMarkA(A) {
  this.markSelected = [];
  this.markSelected.push(A.nom_marque);
  this.modalA.hide();
  this.marika = true;
}
 selectMarkB(B) {
  this.markSelected = [];
  this.markSelected.push(B.nom_marque);
  this.modalB.hide();
  this.marika = true;
}
selectMarkC(C) {
  this.markSelected = [];
  this.markSelected.push(C.nom_marque);
  this.modalC.hide();
  this.marika = true;
}
selectMarkD(D) {
  this.markSelected = [];
  this.markSelected.push(D.nom_marque);
  this.modalD.hide();
  this.marika = true;
}
selectMarkE(E) {
  this.markSelected = [];
  this.markSelected.push(E.nom_marque);
  this.modalE.hide();
  this.marika = true;
}
selectMarkF(F) {
  this.markSelected = [];
  this.markSelected.push(F.nom_marque);
  this.modalF.hide();
  this.marika = true;
}
selectMarkG(G) {
  this.markSelected = [];
  this.markSelected.push(G.nom_marque);
  this.modalG.hide();
  this.marika = true;
}
selectMarkH(H) {
  this.markSelected = [];
  this.markSelected.push(H.nom_marque);
  this.modalH.hide();
  this.marika = true;
}
selectMarkI(I) {
  this.markSelected = [];
  this.markSelected.push(I.nom_marque);
  this.modalI.hide();
  this.marika = true;
}
selectMarkJ(J) {
  this.markSelected = [];
  this.markSelected.push(J.nom_marque);
  this.modalJ.hide();
  this.marika = true;
}
selectMarkK(K) {
  this.markSelected = [];
  this.markSelected.push(K.nom_marque);
  this.modalK.hide();
  this.marika = true;
}
selectMarkL(L) {
  this.markSelected = [];
  this.markSelected.push(L.nom_marque);
  this.modalL.hide();
  this.marika = true;
}
selectMarkM(M) {
  this.markSelected = [];
  this.markSelected.push(M.nom_marque);
  this.modalM.hide();
  this.marika = true;
}
selectMarkN(N) {
  this.markSelected = [];
  this.markSelected.push(N.nom_marque);
  this.modalN.hide();
  this.marika = true;
}
selectMarkO(O) {
  this.markSelected = [];
  this.markSelected.push(O.nom_marque);
  this.modalO.hide();
  this.marika = true;
}
selectMarkP(P) {
  this.markSelected = [];
  this.markSelected.push(P.nom_marque);
  this.modalP.hide();
  this.marika = true;
}
selectMarkQ(Q) {
  this.markSelected = [];
  this.markSelected.push(Q.nom_marque);
  this.modalQ.hide();
  this.marika = true;
}
selectMarkR(R) {
  this.markSelected = [];
  this.markSelected.push(R.nom_marque);
  this.modalR.hide();
  this.marika = true;
}
selectMarkS(S) {
  this.markSelected = [];
  this.markSelected.push(S.nom_marque);
  this.modalS.hide();
  this.marika = true;
}
selectMarkT(T) {
  this.markSelected = [];
  this.markSelected.push(T.nom_marque);
  this.modalT.hide();
  this.marika = true;
}
selectMarkU(U) {
  this.markSelected = [];
  this.markSelected.push(U.nom_marque);
  this.modalU.hide();
  this.marika = true;
}
selectMarkV(V) {
  this.markSelected = [];
  this.markSelected.push(V.nom_marque);
  this.modalV.hide();
  this.marika = true;
}
selectMarkW(W) {
  this.markSelected = [];
  this.markSelected.push(W.nom_marque);
  this.modalW.hide();
  this.marika = true;
}
selectMarkX(X) {
  this.markSelected = [];
  this.markSelected.push(X.nom_marque);
  this.modalX.hide();
  this.marika = true;
}
selectMarkY(Y) {
  this.markSelected = [];
  this.markSelected.push(Y.nom_marque);
  this.modalY.hide();
  this.marika = true;
}
selectMarkZ(Z) {
  this.markSelected = [];
  this.markSelected.push(Z.nom_marque);
  this.modalZ.hide();
  this.marika = true;
}
selectMark() {
  this.seeMark = true;
  this.modalSearch.hide();
  console.log(this.markSelected);
}
  getColor(color) {
    this.colorsChoose = [];
    this.colorsChoose.push(color.nom_couleur);
    this.modalColor.hide();
       console.log(this.colorsChoose, this.colorsChoose.length);
  }
  addColor() {
    this.anotherColor = true;
  }

  ngOnInit() {
    this.getAllColor();
    this.gedBorder();

  }

}
