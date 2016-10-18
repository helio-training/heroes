import { Injectable } from '@angular/core';
import Hero from './shared/hero';
import { Http } from '@angular/http';

// For the .toPromise()
import 'rxjs/add/operator/toPromise';

const HEROES_URL = 'https://blinding-heat-3803.firebaseio.com/marvel.json';

@Injectable()
export default class HeroesService {

  constructor(public http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // const heroes = [
    //   new Hero('Superman', 'Faster than a speeding bullet'),
    //   new Hero('Batman', 'Afraid of bats'),
    //   new Hero('Green Lantern', 'Fear is my enemy'),
    //   new Hero('Wonder Woman', 'Invisible plane and a golden lasso'),
    // ];

    return this.http.get(HEROES_URL)
               .toPromise()
               .then(response => {
                 return response.json().map(hero => new Hero(hero.name, hero.imageUrl))
               });

    // return Promise.resolve(heroes);
  }
}
