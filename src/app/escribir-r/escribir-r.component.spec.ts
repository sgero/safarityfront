import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscribirRComponent } from './escribir-r.component';

describe('EscribirRComponent', () => {
  let component: EscribirRComponent;
  let fixture: ComponentFixture<EscribirRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscribirRComponent]
    });
    fixture = TestBed.createComponent(EscribirRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
