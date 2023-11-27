import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearticketComponent } from './crearticket.component';

describe('CrearticketComponent', () => {
  let component: CrearticketComponent;
  let fixture: ComponentFixture<CrearticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearticketComponent]
    });
    fixture = TestBed.createComponent(CrearticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
