import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokerSearchComponent } from './poker-search/poker-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokerSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokerSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
