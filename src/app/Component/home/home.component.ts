import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomeService } from './../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductByNewer: any;
  BestProducts: any;
  constructor(
    private router: Router,
    private homeService: HomeService,
  ) { }

  getAllProduct() {
    this.homeService.ProductByNewer().subscribe(data => {
      this.ProductByNewer = data.data;
      console.log(this.ProductByNewer, 'Produit nouveaute');
  });
  }
  getAllBestProduct() {
    this.homeService.ProductByBest().subscribe(data => {
      this.BestProducts = data.data;
      console.log(this.BestProducts, 'meilleur vente');
  });
  }
  ngOnInit() {
    this.getAllProduct();
    this.getAllBestProduct();
  }
}
