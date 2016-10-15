import { Component, OnInit } from '@angular/core';
import Hero from '../shared/hero';

/*
 <ul>
 <li><b>SuperMan</b>: Faster than a speeding bullet</li>
 </ul>
 */
@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: [ './heroes-list.component.css' ]
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor() {
    this.heroes = [
      new Hero('Superman', 'Faster than a speeding bullet'),
      new Hero('Batman', 'Afraid of bats'),
      new Hero('Green Lantern', 'Fear is my enemy'),
      new Hero('Wonder Woman', 'Invisible plane and a golden lasso'),
    ];

  }

  ngOnInit() { }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  onCloseClicked() {
    this.selectedHero = null;
  }
}
