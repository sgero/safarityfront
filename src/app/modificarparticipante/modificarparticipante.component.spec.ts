import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarparticipanteComponent } from './modificarparticipante.component';

describe('ModificarparticipanteComponent', () => {
  let component: ModificarparticipanteComponent;
  let fixture: ComponentFixture<ModificarparticipanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarparticipanteComponent]
    });
    fixture = TestBed.createComponent(ModificarparticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
