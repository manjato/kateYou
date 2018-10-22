import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  pays: any;
  A = 'A';
  B = 'B';
  C = 'C';
  D = 'D';
  E = 'E';
  F = 'F';
  G = 'G';
  H = 'H';
  I = 'I';
  J = 'J';
  K = 'K';
  L = 'L';
  M = 'M';
  N = 'N';
  O = 'O';
  P = 'P';
  Q = 'Q';
  R = 'R';
  S = 'S';
  T = 'T';
  U = 'U';
  V = 'V';
  W = 'W';
  X = 'X';
  Y = 'Y';
  Z = 'Z';

  constructor( private http: Http) { }
  colorProduct() {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/CouleurController/list_couleur')
    .map(res => res.json());
  }
  listAllPays(): Observable<any>  {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/PaysController/list_pays_simple')
    .map(res => res.json());
  }
  getMarkA(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.A)
    .map(res => res.json() || {});
  }
  getMarkB(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.B)
    .map(res => res.json() || {});
  }
  getMarkC(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.C)
    .map(res => res.json() || {});
  }
  getMarkD(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.D)
    .map(res => res.json() || {});
  }
  getMarkE(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.E)
    .map(res => res.json() || {});
  }
  getMarkF(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.F)
    .map(res => res.json() || {});
  }
  getMarkG(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.G)
    .map(res => res.json() || {});
  }
  getMarkH(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.H)
    .map(res => res.json() || {});
  }
  getMarkI(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.I)
    .map(res => res.json() || {});
  }
  getMarkJ(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.J)
    .map(res => res.json() || {});
  }
  getMarkK(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.K)
    .map(res => res.json() || {});
  }
  getMarkL(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.L)
    .map(res => res.json() || {});
  }
  getMarkM(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.M)
    .map(res => res.json() || {});
  }
  getMarkN(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.N)
    .map(res => res.json() || {});
  }
  getMarkO(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.O)
    .map(res => res.json() || {});
  }
  getMarkP(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.P)
    .map(res => res.json() || {});
  }
  getMarkQ(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.Q)
    .map(res => res.json() || {});
  }
  getMarkR(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.R)
    .map(res => res.json() || {});
  }
  getMarkS(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.S)
    .map(res => res.json() || {});
  }
  getMarkT(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.T)
    .map(res => res.json() || {});
  }
  getMarkU(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.U)
    .map(res => res.json() || {});
  }
  getMarkV(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.V)
    .map(res => res.json() || {});
  }
  getMarkW(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.W)
    .map(res => res.json() || {});
  }
  getMarkX(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.X)
    .map(res => res.json() || {});
  }
  getMarkY(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.Y)
    .map(res => res.json() || {});
  }
  getMarkZ(): Observable<any> {
    return this.http.get('http://www.otwoo.pw/kateandyouws/index.php/ProduitController/get_list_marque?texte_marque=' + this.Z)
    .map(res => res.json() || {});
  }
}
