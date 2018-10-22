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
  anotherColor: boolean;
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
    this.modalSearch = this.modalService.show(template, Object.assign({}, { class: 'modalMatiere modal-lg' }) );
  }
  openModalA(template: TemplateRef<any>) {
     this.modalA = this.modalService.show(template, { class: 'modal-lg' });
  }
  openModalB(template: TemplateRef<any>) {
    this.modalB = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalC(template: TemplateRef<any>) {
    this.modalC = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalD(template: TemplateRef<any>) {
    this.modalD = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalE(template: TemplateRef<any>) {
    this.modalE = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalF(template: TemplateRef<any>) {
    this.modalF = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalG(template: TemplateRef<any>) {
    this.modalG = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalH(template: TemplateRef<any>) {
    this.modalH = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalI(template: TemplateRef<any>) {
    this.modalI = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalJ(template: TemplateRef<any>) {
    this.modalJ = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalK(template: TemplateRef<any>) {
    this.modalK = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalL(template: TemplateRef<any>) {
    this.modalL = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalM(template: TemplateRef<any>) {
    this.modalM = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalN(template: TemplateRef<any>) {
    this.modalN = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalO(template: TemplateRef<any>) {
    this.modalO = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalP(template: TemplateRef<any>) {
    this.modalP = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalQ(template: TemplateRef<any>) {
    this.modalQ = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalR(template: TemplateRef<any>) {
    this.modalR = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalS(template: TemplateRef<any>) {
    this.modalS = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalT(template: TemplateRef<any>) {
    this.modalT = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalU(template: TemplateRef<any>) {
    this.modalU = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalV(template: TemplateRef<any>) {
    this.modalV = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalW(template: TemplateRef<any>) {
    this.modalW = this.modalService.show(template, { class: 'modal-lg' });
 }
  openModalX(template: TemplateRef<any>) {
    this.modalX = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalY(template: TemplateRef<any>) {
    this.modalY = this.modalService.show(template, { class: 'modal-lg' });
 }
   openModalZ(template: TemplateRef<any>) {
    this.modalZ = this.modalService.show(template, { class: 'modal-lg' });
 }
  openModal123(template: TemplateRef<any>) {
    this.modal123 = this.modalService.show(template, { class: 'modal-lg' });
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
