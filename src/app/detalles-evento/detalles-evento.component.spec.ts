import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEventoComponent } from './detalles-evento.component';

describe('DetallesEventoComponent', () => {
  let component: DetallesEventoComponent;
  let fixture: ComponentFixture<DetallesEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesEventoComponent]
    });
    fixture = TestBed.createComponent(DetallesEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
