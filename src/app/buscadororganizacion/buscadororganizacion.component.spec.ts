import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadororganizacionComponent } from './buscadororganizacion.component';

describe('BuscadororganizacionComponent', () => {
  let component: BuscadororganizacionComponent;
  let fixture: ComponentFixture<BuscadororganizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadororganizacionComponent]
    });
    fixture = TestBed.createComponent(BuscadororganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
