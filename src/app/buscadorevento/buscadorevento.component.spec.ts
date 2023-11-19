import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoreventoComponent } from './buscadorevento.component';

describe('BuscadoreventoComponent', () => {
  let component: BuscadoreventoComponent;
  let fixture: ComponentFixture<BuscadoreventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadoreventoComponent]
    });
    fixture = TestBed.createComponent(BuscadoreventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
