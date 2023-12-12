import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarorganizacionComponent } from './modificarorganizacion.component';

describe('ModificarorganizacionComponent', () => {
  let component: ModificarorganizacionComponent;
  let fixture: ComponentFixture<ModificarorganizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarorganizacionComponent]
    });
    fixture = TestBed.createComponent(ModificarorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
