import { Component, OnInit } from '@angular/core';
import Hero from '../shared/hero';
import HeroService from '../heroes.service';

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

  constructor(public heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHeroes()
        .then(result => {
          this.heroes = result;
        });
  }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  onCloseClicked() {
    this.selectedHero = null;
  }
}
