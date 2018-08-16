import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesproduits',
  templateUrl: './mesproduits.component.html',
  styleUrls: ['./mesproduits.component.scss']
})
export class MesproduitsComponent implements OnInit {
  logo = 'moins';
  colors = [
    {name: 'Beige',
    color : 'grey',
    checked: false},
    {name: 'Blanc',
    color : 'grey',
    checked: false},
    {name: 'Bleu',
    color : 'grey',
    checked: false},
    {name: 'Bleu d\'azur',
    color : 'grey',
    checked: false},
    {name: 'Gris',
    color : 'grey',
    checked: false},
    {name: 'Jaune',
    color : 'grey',
    checked: false},
    {name: 'Marron',
    color : 'grey',
    checked: false},
    {name: 'Noir',
    color : 'grey',
    checked: false},
    {name: 'Rose',
    color : 'grey',
    checked: false},
    {name: 'Rouge',
    color : 'grey',
    checked: false},
    {name: 'Vert',
    color : 'grey',
    checked: false},
    {name: 'Violet',
    color : 'grey',
    checked: false}
  ];
  filtres = [];
  constructor() { }

  changeColor(i) {
     if (this.colors[i].color === 'grey') {
      this.colors[i].color = 'black';
      this.filtres.push(this.colors[i]);
      this.colors[i].checked = true;
    } else if (this.colors[i].color === 'black') {
      this.colors[i].color = 'grey';
      this.filtres.indexOf(i);
      if  (i !== -1)   {
        this.filtres.splice(i, 1);
      }
    }
    console.log(this.filtres);
  }
  deleteColor(i) {
    this.filtres[i].color = 'grey';
    this.filtres[i].checked = !this.filtres[i].checked;
    this.filtres.indexOf(i);
    if  (i !== -1)   {
      this.filtres.splice(i, 1);
    }
   }
  ngOnInit() {
  }

}
