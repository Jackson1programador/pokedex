import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSearchComponent } from './poker-search.component';

describe('PokerSearchComponent', () => {
  let component: PokerSearchComponent;
  let fixture: ComponentFixture<PokerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
