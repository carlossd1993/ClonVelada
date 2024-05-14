import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerSelectionComponent } from './boxer-selection.component';

describe('BoxerSelectionComponent', () => {
  let component: BoxerSelectionComponent;
  let fixture: ComponentFixture<BoxerSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxerSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
