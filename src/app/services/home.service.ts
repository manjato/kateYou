import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class HomeService {

  constructor(
    private http: Http
  ) { }
  ProductByNewer() {
  return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/list_produitavecVendeur')
  .map(res => res.json());
  }
  ProductByBest() {
  return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/CommandeController/listcommande_envoyeProfile')
  .map(res => res.json());
  }
  listPaysandCode () {
    return this.http.get ('http://www.otwoo.pw/kateandyouws/index.php/PaysController/list_pays')
    .map(res => res.json ());
  }
}
