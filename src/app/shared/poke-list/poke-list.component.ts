import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.sass']
})
export class PokeListComponent implements OnInit{

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  public getAllPokemons: any;
  public setAllPokemons: any;
  public apiError: boolean = false


  ngOnInit(): void {
      this.pokeApiService.apiListAllPokemons.subscribe(
        res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
        },
        error => {
          this.apiError = true
        }

      );

  }

  public getSearch(value: string) {
   const filter = this.setAllPokemons.filter(
    (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;


  }

}
