import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    /* This is a sync response: */
    //return HEROES;

    /* This is an async response: */
    const heroes = of(HEROES);
    return heroes;

  }
}
