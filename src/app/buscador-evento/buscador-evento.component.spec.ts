import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEventoComponent } from './buscador-evento.component';

describe('BuscadorEventoComponent', () => {
  let component: BuscadorEventoComponent;
  let fixture: ComponentFixture<BuscadorEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorEventoComponent]
    });
    fixture = TestBed.createComponent(BuscadorEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
