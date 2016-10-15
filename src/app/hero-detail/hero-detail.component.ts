import { Component, OnInit } from '@angular/core';
import Hero from '../shared/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {

  hero: Hero;

  constructor() {
    this.hero = new Hero('Superman', 'Faster than a speeding bullet');
  }

  greet(hero: Hero): void {
    alert(`Yo, ${hero.name} (${hero.description})`);
  }

}
