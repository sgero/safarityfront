import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareventoComponent } from './modificarevento.component';

describe('ModificareventoComponent', () => {
  let component: ModificareventoComponent;
  let fixture: ComponentFixture<ModificareventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificareventoComponent]
    });
    fixture = TestBed.createComponent(ModificareventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
