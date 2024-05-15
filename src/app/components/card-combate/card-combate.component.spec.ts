import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCombateComponent } from './card-combate.component';

describe('CardCombateComponent', () => {
  let component: CardCombateComponent;
  let fixture: ComponentFixture<CardCombateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCombateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCombateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
