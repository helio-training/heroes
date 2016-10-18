import { Component, OnInit } from '@angular/core';
import Hero from '../shared/hero';
import HeroService from '../heroes.service';
import { Router } from '@angular/router';

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

  constructor(public heroService: HeroService, public router: Router) {

  }

  ngOnInit() {
    this.heroService.getHeroes()
        .then(result => {
          this.heroes = result;
        });
  }

  onHeroSelected(hero: Hero) {
    this.router.navigate(['heroes', hero.name]);
  }

  onCloseClicked() {
    this.selectedHero = null;
  }
}
