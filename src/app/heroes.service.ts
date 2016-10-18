import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// For the .toPromise()
import 'rxjs/add/operator/toPromise';

import Hero from './shared/hero';

const HEROES_URL = 'https://blinding-heat-3803.firebaseio.com/marvel.json';

@Injectable()
export default class HeroesService {

  constructor(public http: Http) { }


  // getHeroes(): Promise<Array<Hero>> {
  getHeroes(): Promise<Hero[]> {
    return this.http.get(HEROES_URL).toPromise()
               .then(response => response.json().map(hero => new Hero(hero.name, hero.imageURL)));
  }

  getHero(name): Promise<Hero> {
    return this.http.get(HEROES_URL).toPromise()
        .then(response => response.json()
                                  .filter(hero => hero.name === name)
                                  .reduce((prev, current) => new Hero(current.name, current.imageURL)));
  }
}
