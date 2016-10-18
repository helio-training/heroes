import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import Hero from '../shared/hero';
import HeroService from '../heroes.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {


  @Input()
  hero: Hero;

  constructor(public heroService: HeroService,
              public route: ActivatedRoute,
              public location: Location) {
    // Do not put code that loads data here.... Why?
    // It won't render your component until it's loaded the data... If your data takes
    // 20 seconds to load...  Fail.
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.hero = new Hero(id, 'Some description');
    });
  }

}
