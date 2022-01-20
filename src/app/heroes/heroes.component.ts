import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = { // Initial code
  //   id: 1,
  //   name: 'Windstorm',
  // };
  selectedHero?: Hero;
  heroes = HEROES;

  constructor() {
    // this.selectedHero  = HEROES[0] // => initialize just if selectedHero is declared without ?
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
