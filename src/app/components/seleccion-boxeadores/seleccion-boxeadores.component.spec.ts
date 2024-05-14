import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionBoxeadoresComponent } from './seleccion-boxeadores.component';

describe('SeleccionBoxeadoresComponent', () => {
  let component: SeleccionBoxeadoresComponent;
  let fixture: ComponentFixture<SeleccionBoxeadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionBoxeadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionBoxeadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
