import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  title: string = 'Bienvenue sur notre site';

  constructor() { }

  changeTitle() {
    this.title = 'Nouveau titre';
  }

  ngOnInit() {
  }

}
