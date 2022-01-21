import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    /* This is a sync response: */
    //return HEROES;

    /* This is an async response: */
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id == id)!; // ! is to tell the compiler that the expression will not be null or undefined
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
}
