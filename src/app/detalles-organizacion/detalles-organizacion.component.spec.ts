import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOrganizacionComponent } from './detalles-organizacion.component';

describe('DetallesOrganizacionComponent', () => {
  let component: DetallesOrganizacionComponent;
  let fixture: ComponentFixture<DetallesOrganizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesOrganizacionComponent]
    });
    fixture = TestBed.createComponent(DetallesOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
