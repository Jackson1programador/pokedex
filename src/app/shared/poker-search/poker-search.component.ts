import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poker-search',
  templateUrl: './poker-search.component.html',
  styleUrls: ['./poker-search.component.sass']
})
export class PokerSearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter <string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  public search(value: string){
    this.emmitSearch.emit(value)
  }

}
