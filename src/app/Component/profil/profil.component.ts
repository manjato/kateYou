  import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { ProductsService } from '../../services/products.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class ProfilComponent implements OnInit {
  sign = 'password';
  fa = 'fa-eye';
  homme = 'activ';
  femme = 'noActive';
  listAllPays = [];
  constructor(
    private productService: ProductsService) {}
  showPass () {
    if (this.sign === 'password' && this.fa === 'fa-eye') {
      this.sign = 'text';
      this.fa = 'fa-eye-slash';
    } else {
      this.sign = 'password';
      this.fa = 'fa-eye';
    }
  }
  civilite() {
    if (this.homme === 'activ' && this.femme === 'noActive') {
      this.homme = 'noActive';
      this.femme = 'activ';
    } else {
      this.homme = 'activ';
      this.femme = 'noActive';
    }
  }
  getAllPays() {
    this.productService.listAllPays().subscribe(data => {
      this.listAllPays = data.data;
      console.log('listPAys', this.listAllPays);
    });
  }
  ngOnInit() {
    console.log('test test');
    this.getAllPays();
   }

}
